import styled from 'styled-components'

export const Results = styled.ul`
  max-width: 96rem;
  width: 100%;

  li {
    list-style: none;
    margin-bottom: ${({ theme }) => theme.spacings.small};
  }
`
