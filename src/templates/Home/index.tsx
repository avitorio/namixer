import { useEffect, useState } from 'react'
import Base from 'templates/Base'
import { Container } from 'components/Container'
import SearchField from 'components/SearchField'
import Button from 'components/Button'
import { socket } from '../../config/web-sockets'

import { domainList } from './example'

import * as S from './styles'

const Home = () => {
  const [results, setResults] = useState([{ domain: 'glll.com' }])
  const [searchData, setSearchData] = useState({
    word: '',
    type: 'wordsplus',
    order: 'start',
    size: '1'
  })

  const handleInput = (field: string, value: string) => {
    setSearchData((s) => ({ ...s, [field]: value }))
  }
  const onClick = () => {
    setResults([])
    socket.emit('search', JSON.stringify(searchData), (error: Error) => {
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
          <S.MainSearch>
            <SearchField
              name="word"
              placeholder="Type in a word"
              type="text"
              onInput={(v) => handleInput('word', v)}
            />
            <Button size="xlarge" onClick={onClick}>
              Search Domains
            </Button>
          </S.MainSearch>
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

export default Home
