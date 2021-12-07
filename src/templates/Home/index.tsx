import { useEffect, useState } from 'react'
import Base from 'templates/Base'
import { Container } from 'components/Container'
import { socket } from 'config/web-sockets'
import { useSession } from 'next-auth/client'

import DomainSearch, { ItemProps } from 'components/DomainSearch'
import DomainResults from 'components/DomainResults'

import * as S from './styles'
import Toggle from 'components/Toggle'

export type HomeTemplateProps = {
  filterItems: ItemProps[]
  initialValues?: SearchValues
}

export type SearchValues = {
  [field: string]: string | number
}

export type SearchResults = {
  domain: string
  status: 'taken' | 'available' | 'searching'
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
  const [values, setValues] = useState<SearchValues>(initialValues)
  const [hideTaken, setHideTaken] = useState(false)

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

          setResults((results) => {
            return results.map((domain) => {
              if (domain.domain === resData.domain) {
                domain.status = resData.status
                return resData
              }

              return domain
            })
          })

          resolve(false)
        })
      }, 1000)
    })
  }

  const onSubmit = async (values: SearchValues, fetchMore = false) => {
    if (!fetchMore) {
      socket.disconnect()
      setResults([])
      socket.connect()
    }

    const res = await fetch(
      `http://localhost:3000/api/domains?word=${values.word}&type=${
        values.type
      }&order=${values.order}&size=${values.size}&line=${
        fetchMore ? results.length : 0
      }`
    )

    const data = await res.json()

    if (!session?.user?.name && values.type === 'alphabet') {
      data.list = data.list.slice(0, 30)
    }
    data.list.forEach((domain: string) => {
      setResults((results) => [...results, { domain, status: 'searching' }])
    })

    setHasNextPage(false)
    setSearching(true)
    fetchData({ ...values, line: data.list.length, list: data.list }).then(
      () => {
        if (session?.user?.name) {
          setHasNextPage(values.type !== 'alphabet')
        }
        setSearching(false)
      }
    )
  }

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
          {results.length > 0 && (
            <S.ResultsHeader>
              <Toggle
                onCheck={setHideTaken}
                label="Only show available domains."
                labelFor="hideTaken"
              />
              <span>{`${results.length} domains.`}</span>
            </S.ResultsHeader>
          )}
          <DomainResults
            results={results}
            onSubmit={() => onSubmit(values, true)}
            hasNextPage={hasNextPage}
            session={session}
            hideTaken={hideTaken}
          />
        </S.Wrapper>
      </Container>
    </Base>
  )
}

export default HomeTemplate
