import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #fff;

  ${media.greaterThan('medium')`
      max-width: 96rem;
  `}
`

export const MainSearch = styled.section`
  ${({ theme }) => css`
    margin: 0 calc(-${theme.grid.gutter} / 2) ${theme.spacings.xsmall};

    ${media.greaterThan('medium')`
      max-width: 96rem;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    `}
  `}
`

export const SearchOptions = styled.div`
  align-items: center;
  display: flex;
  margin-top: 10px;
  width: 100%;
`
export const OptionsWrapper = styled.div`
  align-items: center;
  column-gap: 0.8rem;
  display: flex;
  height: 4.4rem;
  margin-right: 2rem;
  margin-bottom: 1rem;
  position: relative;

  span {
    margin-right: 10px;
  }
`
