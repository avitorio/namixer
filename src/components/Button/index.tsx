import { forwardRef, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large' | 'xlarge'
  fullWidth?: boolean
  outline?: boolean
  minimal?: boolean
  disabled?: boolean
  icon?: JSX.Element
  iconPosition?: 'right' | 'left'
  as?: React.ElementType
} & ButtonTypes

const Button: React.ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = (
  {
    children,
    icon,
    size = 'medium',
    fullWidth = false,
    outline = false,
    minimal = false,
    disabled = false,
    iconPosition = 'left',
    ...props
  },
  ref
) => (
  <S.Wrapper
    size={size}
    fullWidth={fullWidth}
    outline={outline}
    hasIcon={!!icon}
    minimal={minimal}
    disabled={disabled}
    ref={ref}
    iconPosition={iconPosition}
    {...props}
  >
    {iconPosition === 'left' && icon}
    {!!children && <span>{children}</span>}
    {iconPosition === 'right' && icon}
  </S.Wrapper>
)

export default forwardRef(Button)
