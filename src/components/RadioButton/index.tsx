import { InputHTMLAttributes } from 'react'

import * as S from './styles'

type RadioButtonValue = string | ReadonlyArray<string> | number

export type RadioButtonProps = {
  onCheck?: (value?: RadioButtonValue) => void
  label?: string
  labelColor?: 'white' | 'black'
  labelFor?: string
  value?: RadioButtonValue
  tooltip?: {
    title: string
    description: string
    keyword: string
    example: string
  }
} & InputHTMLAttributes<HTMLInputElement>

const RadioButton = ({
  label,
  onCheck,
  labelFor = '',
  value,
  tooltip,
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
      {!!label && (
        <S.Label htmlFor={labelFor} className={tooltip && 'tooltip'}>
          {label}
        </S.Label>
      )}
      {tooltip && (
        <S.Tooltip className="tooltip">
          <div>
            <h4>{tooltip.title}</h4>
            <p>{tooltip.description}</p>
            <p>
              Example results for: <strong>{tooltip.keyword}</strong>
            </p>
            <p>{tooltip.example}</p>
          </div>
        </S.Tooltip>
      )}
    </S.Wrapper>
  )
}

export default RadioButton
