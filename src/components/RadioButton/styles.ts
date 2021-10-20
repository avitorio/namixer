import styled, { css } from 'styled-components'
import { lighten } from 'polished'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
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
    padding: ${theme.spacings.xsmall};
    text-decoration: none;
    white-space: nowrap;

    &:hover {
      background-color: ${lighten(0.05, theme.colors.secondary)};
    }
  `}
`
