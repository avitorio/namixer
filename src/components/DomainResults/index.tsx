import Button from 'components/Button'
import Domain from 'components/Domain'
import { Session } from 'next-auth'
import InfiniteScroll from 'react-infinite-scroll-component'
import { SearchResults } from 'templates/Home'
import Link from 'next/link'
import * as S from './styles'

export type DomainResultsProps = {
  results?: SearchResults[]
  onSubmit?: () => Promise<void>
  hasNextPage?: boolean
  session?: Session | null
  hideTaken?: boolean
}

const DomainResults = ({
  results = [],
  onSubmit = () => new Promise(() => null),
  hasNextPage = false,
  session = null,
  hideTaken = false
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
          if (hideTaken) {
            if (result.status !== 'taken') {
              return <Domain {...result} key={result.domain} />
            }
          } else {
            return <Domain {...result} key={result.domain} />
          }
        })}
      </InfiniteScroll>
      {results.length > 0 && !session?.user?.name && (
        <S.Notice>
          Want to access more results?
          <div>
            <Link href="/sign-in" passHref>
              <Button as="a" outline>
                Log in
              </Button>
            </Link>{' '}
            <Link href="/sign-up" passHref>
              <Button as="a">Sign up</Button>
            </Link>
          </div>
        </S.Notice>
      )}
    </S.Results>
  )
}

export default DomainResults
