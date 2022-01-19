import Button from 'components/Button'
import { Session } from 'next-auth'
import InfiniteScroll from 'react-infinite-scroll-component'
import { SearchResults } from 'templates/Home'
import Link from 'next/link'
import * as S from './styles'
import Domain from 'components/Domain'

export type DomainResultsProps = {
  results?: SearchResults[]
  onSubmit?: () => Promise<void>
  setOpenAlert: (open: boolean) => void
  hasNextPage?: boolean
  searching?: boolean
  session?: Session | null
  hideTaken?: boolean
}

const DomainResults = ({
  results = [],
  onSubmit = () => new Promise(() => null),
  hasNextPage = false,
  searching = false,
  session = null,
  hideTaken = false,
  setOpenAlert
}: DomainResultsProps) => {
  return (
    <S.Results>
      <InfiniteScroll
        dataLength={results.length}
        next={onSubmit}
        hasMore={hasNextPage}
        loader={<S.Notice>Looking for cool domains...</S.Notice>}
      >
        {results.map((result) => {
          if (hideTaken) {
            if (result.status !== 'taken') {
              return <Domain {...result} key={result.domain} />
            }
          } else {
            return (
              <Domain
                {...result}
                key={result.domain}
                setOpenAlert={setOpenAlert}
              />
            )
          }
        })}
      </InfiniteScroll>
      {results.length > 0 && !session?.user?.name && (
        <>
          <S.MoreDomains>
            <Domain domain="NeverGonna.com" status="available" />
            <Domain domain="GiveYouUp.com" status="available" />
          </S.MoreDomains>
          <S.Notice>
            <div>
              Want to access more results? <strong>It&apos;s free!</strong>
            </div>
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
        </>
      )}
      {results.length > 0 && hasNextPage && !searching && (
        <S.Notice>Scroll down for more results.</S.Notice>
      )}
    </S.Results>
  )
}

export default DomainResults
