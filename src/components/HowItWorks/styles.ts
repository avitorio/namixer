import styled, { css } from 'styled-components'
import { darken } from 'polished'

import * as HeadingStyles from 'components/Heading/styles'
import { Container } from 'components/Container'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 8rem 0;
    margin: 2rem 0;

    margin-top: ${theme.spacings.large};
    padding-bottom: ${theme.spacings.xsmall};
    padding-top: ${theme.spacings.xxlarge};
    background-color: ${theme.colors.white};
    clip-path: polygon(0 5%, 100% 0%, 100% 100%, 0 100%);

    ${media.greaterThan('medium')`
      padding-top: calc(${theme.spacings.xxlarge} * 2);
      clip-path: polygon(0 15%, 100% 0%, 100% 100%, 0 100%);
    `}

    ${Container} {
      background: white;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      background-color: ${theme.colors.white};
      padding: 10rem 0;
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

export const Column = styled.div`
  ${({ theme }) => css`
    a,
    span {
      display: block;
      color: ${darken(0.2, theme.colors.gray)};
      text-decoration: none;
      margin-bottom: ${theme.spacings.xxsmall};
      font-size: ${theme.font.sizes.medium};
    }
    a {
      word-wrap: break-word;
      overflow-wrap: break-word;
    }
    a:hover {
      text-decoration: underline;
    }
  `}
`

export const Copyright = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.xsmall};
    margin-top: ${theme.spacings.large};
    margin-bottom: ${theme.spacings.medium};
    text-align: center;
  `}
`
