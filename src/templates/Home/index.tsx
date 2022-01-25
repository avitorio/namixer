import { useEffect, useState } from 'react'
import { socket } from 'config/web-sockets'
import { useSession } from 'next-auth/react'
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
import theme from 'styles/theme'
import HowItWorks from 'components/HowItWorks'

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
  const { data: session, status } = useSession()
  const loading = status === 'loading'
  const [hasNextPage, setHasNextPage] = useState(false)
  const [searching, setSearching] = useState(false)
  const [values, setValues] = useState<SearchValues>(initialValues)
  const [hideTaken, setHideTaken] = useState(false)
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
      `/api/domains?word=${values.word}&type=${values.type}&order=${
        values.order
      }&size=${values.size}&line=${fetchMore ? results.length : 0}`
    )

    const data = await res.json()

    if (data.list.length === 0) {
      setHasNextPage(false)
      setSearching(false)
      setResults([])
      return
    }

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
        // If the API returns less than 30 items then we've reached the end of a list
        if (session?.user?.name && data.list.length >= 30) {
          setHasNextPage(
            values.type !== 'alphabet'
              ? true
              : values.size === '1'
              ? false
              : true
          )
        } else if (!fetchMore) {
          setHasNextPage(
            values.type !== 'alphabet'
              ? true
              : values.size === '1'
              ? false
              : true
          )
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

  const handleCreateAlert = async () => {
    if (session?.user?.name) {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/alerts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session?.jwt}`
        },
        body: JSON.stringify({
          keyword: values.word
        })
      })

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
                    <br />{' '}
                    <span style={{ color: theme.colors.primary }}>
                      {values.word}
                    </span>{' '}
                    domain!
                  </h1>
                </MediaMatch>
                <MediaMatch lessThan="small">
                  <h2>
                    Get the perfect
                    <br />
                    <span style={{ color: theme.colors.primary }}>
                      {values.word}
                    </span>{' '}
                    domain!
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
          <S.MainTitle>Not all good domains are taken.</S.MainTitle>
          <S.OpenParagraph>
            Enter a keyword, select how you want to mix it and we’ll show you a
            list of available domains.{' '}
            <a href="#how-it-works">Learn how it works</a>.
          </S.OpenParagraph>
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
      <HowItWorks />
    </Base>
  )
}

export default HomeTemplate
