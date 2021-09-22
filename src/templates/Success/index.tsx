import { Done } from '@styled-icons/material-outlined/Done'

import Base from 'templates/Base'

import { Container } from 'components/Container'

import * as S from './styles'

const Success = () => {
  return (
    <Base>
      <Container>
        <S.Wrapper>
          <S.Heading>Your purchase was successful!</S.Heading>

          <S.CheckMark>
            <Done />
          </S.CheckMark>

          <S.Text>Wait for your payment details by email. Enjoy!</S.Text>
        </S.Wrapper>
      </Container>
    </Base>
  )
}

export default Success
