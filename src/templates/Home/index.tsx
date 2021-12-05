import { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import Base from 'templates/Base'
import { Container } from 'components/Container'
import { socket } from 'config/web-sockets'
import { useSession } from 'next-auth/client'

import DomainSearch, { ItemProps } from 'components/DomainSearch'

import * as S from './styles'

export type HomeTemplateProps = {
  filterItems: ItemProps[]
  initialValues?: SearchValues
}

export type SearchValues = {
  [field: string]: string | number
}

export type SearchResults = {
  domain: string
  status: 'taken' | 'available'
}

export const initialSearchValues = {
  word: '',
  type: 'topWords',
  order: 'suffix',
  size: '1',
  line: 0
}

const HomeTemplate = ({
  filterItems = [],
  initialValues = initialSearchValues
}: HomeTemplateProps) => {
  const [results, setResults] = useState<SearchResults[]>([])
  const [session, loading] = useSession()
  const [hasNextPage, setHasNextPage] = useState(false)
  const [searching, setSearching] = useState(false)
  const [currentlySearching, setCurrentlySearching] = useState('')
  const [lastLine, setLastLine] = useState(0)
  const [values, setValues] = useState<SearchValues>(initialValues)

  const fetchData = async (values: SearchValues): Promise<boolean> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        socket.emit(
          'search',
          JSON.stringify({
            ...values,
            username: session?.user?.name
          })
        )

        socket.on('result', (data) => {
          const resData = JSON.parse(data)
          if (resData.lastLine) {
            setLastLine(resData.lastLine)
          }

          setResults((results) => {
            const found = results.find(
              (result) => result.domain === resData.domain
            )
            if (found) {
              found.status = resData.status
              return results
            }

            if (!session?.user?.name && results.length >= 20) {
              socket.disconnect()
              setHasNextPage(false)
              return results
            }
            return [...results, resData]
          })

          resolve(false)
        })
      }, 1000)
    })
  }

  const onSubmit = (values: SearchValues, fetchMore = false) => {
    if (!fetchMore) {
      setLastLine(0)
      socket.disconnect()
      setResults([])
      socket.connect()
    } else {
      setValues({ ...values, line: lastLine })
    }

    setHasNextPage(false)
    setSearching(true)
    fetchData(values).then((isLastPage: boolean) => {
      if (!isLastPage) {
        setHasNextPage(true)
      } else {
        setHasNextPage(false)
        setSearching(false)
      }
      setSearching(false)
    })
  }

  socket.on('searching', (data) => {
    const resData = JSON.parse(data)
    setCurrentlySearching(resData.domain)
  })

  useEffect(() => {
    if (!loading) {
      socket.emit(
        'authenticate',
        JSON.stringify({ token: session?.jwt, username: session?.user?.name }),
        (error: Error) => {
          if (error) {
            alert(error)
          }
        }
      )
    }
  }, [loading, session])

  return (
    <Base>
      <Container>
        <S.Wrapper>
          <DomainSearch
            items={filterItems}
            onSubmit={onSubmit}
            searching={searching}
            values={{ ...values, line: 0 }}
            setValues={setValues}
          />
          <span>
            {currentlySearching !== '' &&
              `Currently searching: ${currentlySearching}`}
          </span>
          {results.length > 0 && (
            <span>{`Found ${results.length} available domains!`}</span>
          )}
          <S.Results>
            <InfiniteScroll
              dataLength={results.length}
              next={() => onSubmit(values, true)}
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
                          {result.status === 'available' && (
                            <span>Available</span>
                          )}
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
        </S.Wrapper>
      </Container>
    </Base>
  )
}

export default HomeTemplate
