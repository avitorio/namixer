import styled, { css } from 'styled-components'

export const ResultsHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    background-color: ${theme.colors.mainBg};
    padding: ${theme.spacings.xsmall} 0;
    margin: ${theme.spacings.xsmall} 0;
    width: 100%;
    max-width: 96rem;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: -1px;
    z-index: 2;
  `}
`
