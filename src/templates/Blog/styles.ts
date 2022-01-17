import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as HeadingStyles from 'components/Heading/styles'
import { Container } from 'components/Container'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #fff;
`

export const MainTitle = styled.h1`
  ${({ theme }) => css`
    font-size: 3.2rem;
    line-height: 4rem;
    margin-bottom: ${theme.spacings.xsmall};
    text-align: center;

    ${media.greaterThan('medium')`
      font-size: 5.2rem;
      line-height: 6.0rem;
    `}
  `}
`

export const Paragraph = styled.p`
  max-width: 550px;
  font-size: 18px;
  line-height: 28px;
  text-align: center;
  margin-bottom: 40px;

  a {
    color: #fff;
  }
`

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    margin: 2rem 0;
    padding-bottom: ${theme.spacings.xsmall};
    background-color: ${theme.colors.white};
    clip-path: polygon(0 5%, 100% 0%, 100% 100%, 0 100%);

    ${Container} {
      background: white;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      background-color: ${theme.colors.white};

      padding: 8rem 1.6rem;

      ${media.greaterThan('medium')`
      padding: 5.6rem 1.6rem 10rem;

      `}
    }

    ${HeadingStyles.Wrapper} {
      text-transform: uppercase;
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin-top: ${theme.spacings.medium};
    max-width: 720px;
    flex-direction: column;

    p {
      font-size: ${theme.font.sizes.large};
      line-height: 2.6rem;
    }

    ul {
      margin-left: ${theme.spacings.small};
    }

    li {
      margin-bottom: ${theme.spacings.small};
      font-size: ${theme.font.sizes.large};
      line-height: 2.6rem;
    }
  `}
`
