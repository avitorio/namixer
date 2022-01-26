import Logo from 'components/Logo'
import { event } from 'utils/ga'
import * as S from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => {
  const handleOutboundLink = (target: HTMLAnchorElement) => {
    event({
      event: 'link',
      params: {
        location: 'footer',
        link_url: `${target.getAttribute('data-label')}`
      }
    })
  }

  return (
    <S.Wrapper>
      <Logo color="white" />
      <S.Content>
        <p>
          Built by Andre Vitorio.
          <br /> Follow me on{' '}
          <a
            href="https://twitter.com/andrevitorio"
            target="_blank"
            rel="noreferrer"
            data-label="twitter"
            onClick={(e) => handleOutboundLink(e.currentTarget)}
          >
            Twitter
          </a>{' '}
          and{' '}
          <a
            href="https://linkedin.com/in/andrevitorio"
            target="_blank"
            rel="noreferrer"
            data-label="linkedin"
            onClick={(e) => handleOutboundLink(e.currentTarget)}
          >
            LinkedIn
          </a>
          .
        </p>
      </S.Content>

      <S.Copyright>Namixer {currentYear} © All rights reserved.</S.Copyright>
    </S.Wrapper>
  )
}

export default Footer
