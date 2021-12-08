import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

import { SearchFieldProps } from '.'

type IconPositionProps = Pick<SearchFieldProps, 'iconPosition'>

type WrapperProps = Pick<SearchFieldProps, 'disabled'> & { error?: boolean }

export const InputWrapper = styled.div`
  ${media.greaterThan('large')`
    width: 72rem;
  `}
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    background: ${theme.colors.neutral.neutral100};
    border: 0.2rem solid;
    border-radius: ${theme.border.radius.small};
    padding: 0 ${theme.spacings.xsmall};
    height: ${theme.spacings.xxlarge};

    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primaryColor.primary1000};
    }

    ${media.greaterThan('medium')`
    border-radius: ${theme.border.radius.big};
      height: 6.4rem;
    `}
  `}
`

export const Input = styled.input<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.xxlarge};
    padding: ${theme.spacings.xxsmall} 0;
    padding-${iconPosition}: ${theme.spacings.xsmall};
    background: transparent;
    border: 0;
    outline: none;
    width: ${iconPosition === 'right' ? `calc(100% - 2.2rem)` : `100%`};
    ${media.lessThan('medium')`
      width: 100%;
      padding: ${theme.spacings.xxsmall} 0;
      &[type='text'] {
        font-size: 16px;
      }
    `}
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    cursor: pointer;
  `}
`

export const Icon = styled.div<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    display: none;

    ${media.greaterThan('small')`
      display: flex;
      color: ${theme.colors.neutral.neutral500};
      order: ${iconPosition === 'right' ? 1 : 0};

      & > svg {
        width: 3.2rem;
      }
    `}
  `}
`

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.red};
    font-size: ${theme.font.sizes.xsmall};
  `}
`

const wrapperModifiers = {
  error: (theme: DefaultTheme) => css`
    ${InputWrapper} {
      border-color: ${theme.colors.red};
    }

    ${Icon},
    ${Label} {
      color: ${theme.colors.red};
    }
  `,
  disabled: (theme: DefaultTheme) => css`
    ${Label},
    ${Input},
    ${Icon} {
      cursor: not-allowed;
      color: ${theme.colors.gray};

      &::placeholder {
        color: currentColor;
      }
    }
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, error, disabled }) => css`
    ${error && wrapperModifiers.error(theme)}
    ${disabled && wrapperModifiers.disabled(theme)}
    width: 100%;

    ${media.greaterThan('large')`
      width: 72rem;
    `}
  `}
`
