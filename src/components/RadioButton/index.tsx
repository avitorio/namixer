import { InputHTMLAttributes } from 'react'

import * as S from './styles'

type RadioButtonValue = string | ReadonlyArray<string> | number

export type RadioButtonProps = {
  onCheck?: (value?: RadioButtonValue) => void
  label?: string
  labelColor?: 'white' | 'black'
  labelFor?: string
  value?: RadioButtonValue
} & InputHTMLAttributes<HTMLInputElement>

const RadioButton = ({
  label,
  onCheck,
  labelFor = '',
  value,
  ...props
}: RadioButtonProps) => {
  const onChange = () => {
    !!onCheck && onCheck(value)
  }

  return (
    <S.Wrapper>
      <S.Input
        id={labelFor}
        type="radio"
        value={value}
        onChange={onChange}
        {...props}
      />
      {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
    </S.Wrapper>
  )
}

export default RadioButton
