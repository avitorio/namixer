import io from 'socket.io-client'
import { useEffect, useState } from 'react'
import Base from 'templates/Base'
import { Container } from 'components/Container'
import SearchField from 'components/SearchField'
import Button from 'components/Button'
import { socket } from '../../config/web-sockets'

import { domainList } from './example'

import * as S from './styles'

const Home = () => {
  const [values, setValues] = useState({ word: '' })

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }
  const onClick = () => {
    console.log('yo')
    socket.emit('what', values, (error) => {
      console.log(values.word)
    })
  }
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
            {domainList.map(
              (result: { domain: string; isAvailable: boolean }) => (
                <li key={result.domain}>
                  <a href="https://google.com">{result.domain}</a>
                </li>
              )
            )}
          </ul>
        </S.Wrapper>
      </Container>
    </Base>
  )
}

export default Home
