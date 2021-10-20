import { useEffect, useState } from 'react'
import Base from 'templates/Base'
import { Container } from 'components/Container'
import { socket } from '../../config/web-sockets'

import DomainSearch, { ItemProps } from 'components/DomainSearch'

import * as S from './styles'

export type HomeTemplateProps = {
  filterItems: ItemProps[]
}

export type SearchValues = {
  [field: string]: string
}

const HomeTemplate = ({ filterItems = [] }: HomeTemplateProps) => {
  const [results, setResults] = useState([{ domain: 'glll.com' }])

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
      setResults((results) => [...results, resData])
    })
  }, [])

  return (
    <Base>
      <Container>
        <S.Wrapper>
          {socket ? (
            <div className="chat-container">
              <h1>Connected</h1>
            </div>
          ) : (
            <div>Not Connected</div>
          )}
          {/* <S.MainSearch>
            <SearchField
              name="word"
              placeholder="Type in a word"
              type="text"
              onInput={(v) => handleInput('word', v)}
            />
            <Button size="xlarge" onSubmit={onSubmit}>
              Search Domains
            </Button>
          </S.MainSearch> */}
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
          </ul>
        </S.Wrapper>
      </Container>
    </Base>
  )
}

export default HomeTemplate
