import Logo from 'components/Logo'
import * as S from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <S.Wrapper>
    <Logo color="black" />
    <S.Content>
      <p>
        Built by Andre Vitorio. Follow me on{' '}
        <a href="https://twitter.com/andrevitorio">Twitter</a> and{' '}
        <a href="https://linkedin.com/in/andrevitorio">LinkedIn</a>.
      </p>
    </S.Content>

    <S.Copyright>Namixer {currentYear} © All rights reserved.</S.Copyright>
  </S.Wrapper>
)

export default Footer
