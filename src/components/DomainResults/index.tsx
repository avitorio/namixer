import Domain from 'components/Domain'
import { Session } from 'next-auth'
import InfiniteScroll from 'react-infinite-scroll-component'
import { SearchResults } from 'templates/Home'
import * as S from './styles'

export type DomainResultsProps = {
  results?: SearchResults[]
  onSubmit?: () => Promise<void>
  hasNextPage?: boolean
  session?: Session | null
}

const DomainResults = ({
  results = [],
  onSubmit = () => new Promise(() => null),
  hasNextPage = false,
  session = null
}: DomainResultsProps) => {
  return (
    <S.Results>
      <InfiniteScroll
        dataLength={results.length}
        next={onSubmit}
        hasMore={hasNextPage}
        loader={<h4>Loading...</h4>}
      >
        {results.map((result) => {
          if (result.domain) {
            return <Domain {...result} />
          }
        })}
      </InfiniteScroll>
      {results.length > 0 && !session?.user?.name && (
        <h1>Register for more results</h1>
      )}
    </S.Results>
  )
}

export default DomainResults
