import styled from 'styled-components'

export const Results = styled.ul`
  max-width: 96rem;
  width: 100%;

  li {
    list-style: none;
    margin-bottom: ${({ theme }) => theme.spacings.small};
  }
`

export const Notice = styled.div`
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
`
