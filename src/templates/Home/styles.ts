import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #fff;
`

export const MainSearch = styled.section`
  ${({ theme }) => css`
    margin: 0 calc(-${theme.grid.gutter} / 2) ${theme.spacings.large};

    ${media.greaterThan('medium')`
      max-width: 96rem;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    `}
  `}
`

export const Results = styled.ul`
  margin-top: ${({ theme }) => theme.spacings.large};
  max-width: 96rem;
  width: 100%;

  li {
    list-style: none;
    margin-bottom: ${({ theme }) => theme.spacings.small};
  }
`

export const Domain = styled.a`
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
`
