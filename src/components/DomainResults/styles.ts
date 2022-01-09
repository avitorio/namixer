import styled from 'styled-components'
import media from 'styled-media-query'

export const Results = styled.ul`
  max-width: 96rem;
  width: 100%;

  li {
    list-style: none;
    margin-bottom: ${({ theme }) => theme.spacings.small};
  }
`

export const Notice = styled.div`
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
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.spacings.small};

  > div {
    margin-top: ${({ theme }) => theme.spacings.xsmall};
  }

  ${media.greaterThan('small')`
    height: 68px;
    flex-direction: row;

    > div {
      margin-top: 0;
    }
  `}
`
