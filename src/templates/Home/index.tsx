import { useEffect, useState } from 'react'
import Base from 'templates/Base'
import { Container } from 'components/Container'
import { socket } from 'config/web-sockets'
import { useSession } from 'next-auth/client'

import DomainSearch, { ItemProps } from 'components/DomainSearch'

import * as S from './styles'

export type HomeTemplateProps = {
  filterItems: ItemProps[]
}

export type SearchValues = {
  [field: string]: string | number
}

export type SearchResults = {
  domain: string
}

const HomeTemplate = ({ filterItems = [] }: HomeTemplateProps) => {
  const [results, setResults] = useState<SearchResults[]>([])
  const [session, loading] = useSession()
  const [searchId, setSearchId] = useState(1)
  const [searching, setSearching] = useState(false)
  const [currentlySearching, setCurrentlySearching] = useState('')

  const onSubmit = (values: SearchValues) => {
    socket.disconnect()
    setResults([])
    setSearchId(searchId + 1)
    setSearching(true)
    socket.connect()
    socket.emit(
      'search',
      JSON.stringify({ ...values, username: session?.user?.name, searchId }),
      (error: Error) => {
        if (error) {
          alert(error)
        }
      }
    )
  }

  useEffect(() => {
    socket.on('searching', (data) => {
      const resData = JSON.parse(data)
      if (resData.searchId !== searchId) {
        return
      }
      setCurrentlySearching(resData.domain)
    })

    socket.on('result', (data) => {
      const resData = JSON.parse(data)

      console.log(resData)

      if (resData.lastLine) {
        setSearching(false)
        setCurrentlySearching('')
        return
      }

      if (resData.searchId !== searchId) {
        return
      }

      setResults((results) => {
        setSearching(false)
        setCurrentlySearching('')
        const found = results.find((result) => result.domain === resData.domain)
        console.log(results)
        if (found) {
          return results
        }
        if (!session?.user?.name && results.length >= 10) {
          socket.disconnect()
          return results
        }

        return [...results, resData]
      })
    })
  }, [session, searchId])

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
          />
          <span>
            {currentlySearching !== '' &&
              `Currently searching: ${currentlySearching}`}
          </span>
          {results.length > 0 && (
            <span>{`Found ${results.length} available domains!`}</span>
          )}
          <S.Results>
            {results.map((result) => {
              if (result.domain) {
                return (
                  <li key={result.domain}>
                    <S.Domain>
                      <div>
                        <strong>{result.domain}</strong>
                      </div>
                    </S.Domain>
                  </li>
                )
              }
            })}
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
