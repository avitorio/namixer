import styled, { css } from 'styled-components'
import media from 'styled-media-query'

type WrapperProps = {
  isOpen?: boolean
}

const wrapperModifiers = {
  open: () => css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
    visibility: visible;
  `,
  close: () => css`
    opacity: 0;
    pointer-events: none;
    transform: translateY(-2rem);
    visibility: hidden;
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, isOpen }) => css`
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    ${Content},
    ${Overlay} {
      transition: transform 0.2s ease-in, opacity ${theme.transition.default};

      ${isOpen && wrapperModifiers.open()}
      ${!isOpen && wrapperModifiers.close()}
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    position: fixed;
    cursor: auto;
    display: flex;
    flex-direction: column;
    background: ${theme.colors.white};
    color: ${theme.colors.black};
    margin-top: ${theme.spacings.small};
    z-index: ${theme.layers.alwaysOnTop};
    border-radius: ${theme.border.radius.big};
    width: 90%;
    max-width: 72rem;
    padding: ${theme.spacings.small};
    align-items: center;
    text-align: center;

    ${media.greaterThan('small')`
    padding: ${theme.spacings.xxlarge};

    `}
  `}
`

export const Overlay = styled.div`
  ${({ theme }) => css`
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: ${theme.layers.overlay};
  `}
`

export const IconWrapper = styled.div`
  display: block;
  > svg {
    position: absolute;
    top: 0;
    right: 0;
    margin: ${({ theme }) => theme.spacings.xsmall};
    cursor: pointer;
    width: 2.4rem;
    height: 2.4rem;
  }
`
