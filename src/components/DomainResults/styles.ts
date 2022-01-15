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

export const MoreDomains = styled.div`
  position: relative;

  li > div {
    filter: blur(3px);
    pointer-events: none;
  }
  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, #030517 0%, rgba(255, 255, 255, 0) 100%);
    top: 0;
  }
`
