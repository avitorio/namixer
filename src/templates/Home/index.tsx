import { useEffect, useState } from 'react'
import { socket } from 'config/web-sockets'
import { useSession } from 'next-auth/client'
import Link from 'next/link'

import * as S from './styles'

import Base from 'templates/Base'
import { Container } from 'components/Container'
import DomainSearch, { SearchOptionsProps } from 'components/DomainSearch'
import DomainResults from 'components/DomainResults'
import ResultsHeader from 'components/ResultsHeader'
import Popup from 'components/Popup'
import Button from 'components/Button'
import MediaMatch from 'components/MediaMatch'

export type HomeTemplateProps = {
  searchOptions: SearchOptionsProps[]
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
  searchOptions = [],
  initialValues = initialSearchValues
}: HomeTemplateProps) => {
  const [results, setResults] = useState<SearchResults[]>([])
  const [session, loading] = useSession()
  const [hasNextPage, setHasNextPage] = useState(false)
  const [searching, setSearching] = useState(false)
  const [values, setValues] = useState<SearchValues>(initialValues)
  const [hideTaken, setHideTaken] = useState(false)
  const [dataList, setDataList] = useState([])
  const [openAlert, setOpenAlert] = useState(false)
  const [registerAlert, setRegisterAlert] = useState(false)

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

    setDataList(data.list)
    setHasNextPage(false)
    setSearching(true)
    fetchData({ ...values, line: data.list.length, list: data.list }).then(
      () => {
        // If the API returns less than 30 items then we've reached the end of a list
        if (session?.user?.name && dataList.length >= 30) {
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

  useEffect(() => {
    socket.disconnect()
  }, [])

  const handleCreateAlert = () => {
    if (session?.user?.name) {
      setRegisterAlert(true)
    }
  }

  return (
    <Base>
      <Container>
        {openAlert && (
          <Popup setIsOpen={setOpenAlert} isOpen={openAlert}>
            {registerAlert ? (
              <>
                <h1>Thank you for your interest</h1>
                <p>
                  Alerts are on the horizon! This feature is in the works.
                  <br />
                  We&apos;ll send you a message once it&apos;s ready.
                </p>
                <p>
                  Stay tuned, the perfect domain name will soon be in our
                  hands...
                </p>
              </>
            ) : (
              <>
                <MediaMatch greaterThan="small">
                  <h1>
                    We will get you the perfect
                    <br /> {values.word} domain!
                  </h1>
                </MediaMatch>
                <MediaMatch lessThan="small">
                  <h2>
                    Get the perfect
                    <br /> {values.word} domain!
                  </h2>
                </MediaMatch>
                <h3>Snatch premium domains worth thousands of $$$!</h3>
                <p>
                  For only <strong>$9/month</strong>, we will monitor every
                  domain in this list and send you a notification when they
                  become available.
                </p>
                {session?.user?.name ? (
                  <div>
                    <Button size="large" onClick={handleCreateAlert}>
                      Get Daily Alerts!
                    </Button>
                  </div>
                ) : (
                  <>
                    <p>You need to be logged in to create an alert.</p>
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
                  </>
                )}
              </>
            )}
          </Popup>
        )}
        <S.Wrapper>
          <DomainSearch
            searchOptions={searchOptions}
            onSubmit={onSubmit}
            searching={searching}
            values={{ ...values, line: 0 }}
            setValues={setValues}
          />
          <ResultsHeader
            results={results}
            setHideTaken={setHideTaken}
            hideTaken={hideTaken}
          />
          <DomainResults
            results={results}
            onSubmit={() => onSubmit(values, true)}
            hasNextPage={hasNextPage}
            session={session}
            hideTaken={hideTaken}
            searching={searching}
            setOpenAlert={setOpenAlert}
          />
        </S.Wrapper>
      </Container>
    </Base>
  )
}

export default HomeTemplate
