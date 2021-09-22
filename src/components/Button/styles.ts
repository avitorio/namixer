import styled, { css, DefaultTheme } from 'styled-components'
import { darken } from 'polished'

import { ButtonProps } from '.'

export type WrapperProps = {
  hasIcon: boolean
} & Pick<
  ButtonProps,
  'size' | 'fullWidth' | 'minimal' | 'outline' | 'iconPosition'
>

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3.6rem;
    font-size: ${theme.font.sizes.small};
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,
  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,
  xlarge: (theme: DefaultTheme) => css`
    height: 6.4rem;
    font-size: ${theme.font.sizes.large};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.large};
    border-radius: ${theme.border.radius.big};
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  withIcon: (theme: DefaultTheme, iconPosition: 'right' | 'left') => css`
    svg {
      width: 1.5rem;
      margin-left: ${iconPosition === 'right' ? '10px' : 0};
      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `,
  minimal: (theme: DefaultTheme) => css`
    background: none;
    color: ${theme.colors.primaryColor.primary1000};
    border: 1px solid transparent;

    &:hover {
      background: none;
      color: ${theme.colors.primaryColor.primary1000};
      border: ${`1px solid ${theme.colors.primaryColor.primary1000}`};
    }
  `,
  outline: (theme: DefaultTheme) => css`
    background: none;
    color: ${theme.colors.primaryColor.primary1000};
    border: ${`1px solid ${theme.colors.primaryColor.primary1000}`};

    &:hover {
      color: ${theme.colors.neutral.white};
      border: ${`1px solid ${darken(
        0.1,
        theme.colors.primaryColor.primary1000
      )}`};
    }
  `,
  disabled: () => css`
    &:disabled {
      cursor: not-allowed;
      filter: saturate(30%);
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({
    theme,
    size,
    fullWidth,
    outline,
    hasIcon,
    minimal,
    iconPosition = 'left',
    disabled
  }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.primaryColor.primary1000};
    color: ${theme.colors.white};
    font-family: ${theme.font.family};
    font-weight: ${theme.font.bold};
    border: none;
    cursor: pointer;
    border-radius: ${theme.border.radius.small};
    padding: ${theme.spacings.xxsmall};
    text-decoration: none;
    white-space: nowrap;

    &:hover {
      color: ${theme.colors.white};
      background: ${darken(0.1, theme.colors.primaryColor.primary1000)};
    }

    ${!!size && wrapperModifiers[size](theme)};
    ${fullWidth && wrapperModifiers.fullWidth()};
    ${!!hasIcon && wrapperModifiers.withIcon(theme, iconPosition)};
    ${minimal && wrapperModifiers.minimal(theme)};
    ${disabled && wrapperModifiers.disabled()};
    ${outline && wrapperModifiers.outline(theme)};
  `}
`
