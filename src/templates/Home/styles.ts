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

export const ResultsHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin: ${theme.spacings.medium} 0;
    width: 100%;
    max-width: 96rem;
    align-items: center;
    justify-content: space-between;
  `}
`
