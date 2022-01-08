import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { lighten } from 'polished'

export const Wrapper = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    position: relative;

    ${media.greaterThan('small')`
      &:hover .tooltip {
        display: block;
      }
    `}
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    opacity: 0;
    position: fixed;
    width: 0px;

    &:checked + label {
      border: 2px solid ${theme.accentColors.green};
      background: ${theme.colors.secondary};
    }
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.neutral.neutral100};
    border: 2px solid #ffffff00;
    border-radius: ${theme.border.radius.small};
    color: ${theme.colors.neutral.neutral900};
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    font-family: ${theme.font.family};
    font-weight: ${theme.font.bold};
    padding: 1rem;
    text-decoration: none;
    position: relative;
    white-space: pre;

    &:hover {
      z-index: 4;
      background-color: ${lighten(0.05, theme.colors.secondary)};

      &.tooltip:after {
        content: '';
        position: absolute;
        bottom: -23px;
        left: 50%;
        margin-left: -16px;
        border-width: 15px;
        border-style: solid;
        border-color: transparent transparent #fff;
        z-index: 2;
      }
    }

    ${media.greaterThan('medium')`
      padding: ${theme.spacings.xsmall};
    `}
  `}
`

export const Tooltip = styled.div`
  ${({ theme }) => css`
    display: none;
    position: absolute;
    left: 0;
    width: 500px;
    max-width: 90vw;
    z-index: 3;
    top: 100%;
    line-height: 1.7;
    color: ${theme.colors.neutral.neutral900};

    > div {
      margin-top: 20px;
      display: inline-block;
      background: white;
      padding: 10px 15px;
      box-shadow: ${theme.shadow.fluffy.elevation5};
      border-radius: 4px;
    }
  `}
`
