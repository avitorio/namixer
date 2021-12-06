import styled, { css } from 'styled-components'

import { SearchResults } from 'templates/Home'
export type DomainProps = Pick<SearchResults, 'status'>

const domainModifiers = {
  available: () => css`
    opacity: 1;
  `,
  searching: () => css`
    opacity: 1;
  `,
  taken: () => css`
    background-color: #ffffff38;
    strong {
      color: #fff;
      opacity: 0.5;
    }
  `
}

export const DomainRow = styled.li<DomainProps>`
  ${({ status }) => css`
    height: 68px;
    left: 242px;
    top: 574px;
    color: #000;
    background-color: #ffffff;
    border-radius: 8px;
    max-width: 96rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px;
    ${!!status && domainModifiers[status]};
  `}
`

export const Domain = styled.div<DomainProps>`
  ${({ theme, status }) => css`
    strong {
      margin-right: 8px;
    }
    span {
      display: inline-flex;
      font-weight: 600;
      height: ${theme.spacings.xsmall};
      font-size: ${theme.font.sizes.xsmall};
      align-items: center;
      color: rgb(250, 250, 250);
      padding: 0rem 0.6rem;
      border-radius: 1.2rem;
      background: ${status === 'available' ? '#3cd3c1' : theme.colors.mainBg};
    }

    button {
      background: ${status === 'available'
        ? '#3cd3c1'
        : theme.colors.neutral.neutral400};
    }
  `}
`
export const Loading = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;

  &:after {
    content: ' ';
    display: flex;
    width: 34px;
    height: 34px;
    margin: 8px;
    border-radius: 50%;
    border: 3px solid #3cd3c1;
    border-color: #3cd3c1 transparent #3cd3c1 transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
