import styled, { css } from 'styled-components'
import { SearchResults } from 'templates/Home'

export const Results = styled.ul`
  margin-top: ${({ theme }) => theme.spacings.large};
  max-width: 96rem;
  width: 100%;

  li {
    list-style: none;
    margin-bottom: ${({ theme }) => theme.spacings.small};
  }
`

export type DomainProps = Pick<SearchResults, 'status'>

const domainModifiers = {
  available: () => css`
    opacity: 1;
  `,
  searching: () => css`
    opacity: 1;
  `,
  taken: () => css`
    span,
    strong {
      opacity: 0.5;
    }
  `
}

export const Domain = styled.a<DomainProps>`
  ${({ status }) => css`
    height: 68px;
    left: 242px;
    top: 574px;
    color: #000;
    background: #ffffff;
    border-radius: 8px;
    max-width: 96rem;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 24px;
    ${!!status && domainModifiers[status]};
  `}
`
