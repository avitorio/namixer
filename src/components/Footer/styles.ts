import styled, { css } from 'styled-components'

export const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: ${theme.spacings.medium};
    color: ${theme.colors.white};
    text-align: center;
    line-height: 2.4rem;

    a {
      color: ${theme.colors.white};
    }
  `}
`

export const Copyright = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xsmall};
    margin-top: ${theme.spacings.large};
    margin-bottom: ${theme.spacings.medium};
    text-align: center;
  `}
`
