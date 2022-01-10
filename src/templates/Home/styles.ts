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

export const MainTitle = styled.h1`
  ${({ theme }) => css`
    font-size: 3.2rem;
    line-height: 4rem;
    margin-bottom: ${theme.spacings.xsmall};
    text-align: center;

    ${media.greaterThan('medium')`
      font-size: 4.8rem;
      line-height: 5.2rem;
    `}
  `}
`

export const OpenParagraph = styled.p`
  max-width: 460px;
  font-size: 18px;
  line-height: 28px;
  text-align: center;
  margin-bottom: 40px;
`
