import { SelectHTMLAttributes } from 'react'

import * as S from './styles'

type SelectValue = string | ReadonlyArray<string> | number

export type SelectProps = {
  onSelect?: (value?: SelectValue) => void
  children: React.ReactNode
} & SelectHTMLAttributes<HTMLSelectElement>

const Select = ({ children, onSelect, value, ...props }: SelectProps) => {
  const onChange = () => {
    !!onSelect && onSelect(value)
  }

  return (
    <S.Wrapper>
      <S.Select onChange={onChange} {...props}>
        {children}
      </S.Select>
    </S.Wrapper>
  )
}

export default Select
