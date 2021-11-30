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
  const [results, setResults] = useState<SearchResults[]>([
    { domain: 'google.com' }
  ])
  const [session, loading] = useSession()

  // @TODO: Create uuid for each search to avoid old searches showing up

  const onSubmit = (values: SearchValues) => {
    setResults([])
    socket.emit('search', JSON.stringify(values), (error: Error) => {
      if (error) {
        alert(error)
      }
    })
  }

  useEffect(() => {
    socket.on('result', (data) => {
      const resData = JSON.parse(data)
      setResults((results) => {
        const found = results.find((result) => result.domain === resData.domain)
        if (found) {
          return results
        }
        if (!session?.user?.name && results.length >= 10) {
          return results
        }

        return [...results, resData]
      })
    })
  }, [session])

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
          <DomainSearch items={filterItems} onSubmit={onSubmit} />
          <ul>
            {results.map((result) => {
              if (result.domain) {
                return (
                  <li key={result.domain}>
                    <div>
                      <strong>{result.domain}</strong>
                    </div>
                  </li>
                )
              }
            })}
            {results.length > 0 && !session?.user?.name && (
              <h1>Register for more results</h1>
            )}
          </ul>
        </S.Wrapper>
      </Container>
    </Base>
  )
}

export default HomeTemplate
