import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

import { SearchFieldProps } from '.'

type IconPositionProps = Pick<SearchFieldProps, 'iconPosition'>

type WrapperProps = Pick<SearchFieldProps, 'disabled'> & { error?: boolean }

export const InputWrapper = styled.div`
  ${media.greaterThan('large')`
    width: 718px;
  `}
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    background: ${theme.colors.neutral.neutral100};
    border-radius: 0.8rem;
    padding: 0 ${theme.spacings.xsmall};
    height: 6.4rem;

    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primaryColor.primary1000};
    }
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
    display: flex;
    color: ${theme.colors.neutral.neutral500};
    order: ${iconPosition === 'right' ? 1 : 0};

    & > svg {
      width: 2.2rem;
    }
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
      width: 264px;
    `}
  `}
`
