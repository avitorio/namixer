import { Session } from 'next-auth'
import InfiniteScroll from 'react-infinite-scroll-component'
import { SearchResults } from 'templates/Home'
import * as S from './styles'

export type ResultsListProps = {
  results?: SearchResults[]
  onSubmit?: () => Promise<void>
  hasNextPage?: boolean
  session?: Session | null
}

const ResultsList = ({
  results = [],
  onSubmit = () => new Promise(() => null),
  hasNextPage = false,
  session = null
}: ResultsListProps) => (
  <S.Results>
    <InfiniteScroll
      dataLength={results.length}
      next={onSubmit}
      hasMore={hasNextPage}
      loader={<h4>Loading...</h4>}
    >
      {results.map((result) => {
        if (result.domain) {
          return (
            <li key={result.domain}>
              <S.Domain status={result.status}>
                <div>
                  <strong>{result.domain}</strong>
                  {result.status === 'taken' && <span>Taken</span>}
                  {result.status === 'searching' && <span>Searching</span>}
                  {result.status === 'available' && <span>Available</span>}
                </div>
              </S.Domain>
            </li>
          )
        }
      })}
    </InfiniteScroll>
    {results.length > 0 && !session?.user?.name && (
      <h1>Register for more results</h1>
    )}
  </S.Results>
)

export default ResultsList
