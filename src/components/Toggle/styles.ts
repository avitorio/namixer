import styled, { css } from 'styled-components'

export const Toggle = styled.label`
  ${({ theme }) => css`
    display: inline-flex;
    align-items: center;
    flex-wrap: wrap;
    position: relative;
    gap: 1ch;

    span {
      --offset: 0.15em;
      --diameter: 1.2em;
      display: inline-flex;
      align-items: center;
      justify-content: space-around;
      width: calc(var(--diameter) * 2 + var(--offset) * 2);
      height: calc(var(--diameter) + var(--offset) * 2);
      box-sizing: content-box;
      border: 0.1em solid rgb(0 0 0 / 0.2);
      position: relative;
      border-radius: 100vw;
      background-color: ${theme.colors.primary};
      transition: 250ms;
      pointer-events: none;
    }

    span::before {
      content: '';

      width: var(--diameter);
      height: var(--diameter);
      border-radius: 50%;

      box-sizing: border-box;
      border: 0.1 solid rgb(0 0 0 / 0.2);

      position: absolute;
      z-index: 2;
      top: 50%;
      left: var(--offset);
      transform: translate(0, -50%);

      background-color: #fff;
      transition: inherit;
    }

    @media (prefers-reduced-motion: reduce) {
      span {
        transition-duration: 0ms;
      }
    }

    input {
      position: absolute;
      opacity: 0;
      width: 100%;
      height: 100%;
      cursor: pointer;

      &:focus {
        + span {
          outline: 1px dotted #212121;
          outline: 1px auto -webkit-focus-ring-color;
        }

        &:focus:not(:focus-visible) + span {
          outline: 0;
        }
      }

      &:checked {
        + span {
          background-color: #3cd3c1;

          &::before {
            transform: translate(100%, -50%);
          }
        }
      }

      &:disabled + span {
        opacity: 0.6;
        filter: grayscale(40%);
        cursor: not-allowed;
      }
    }
  `}
`
