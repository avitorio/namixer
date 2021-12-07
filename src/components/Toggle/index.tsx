import { InputHTMLAttributes, useState } from 'react'
import * as S from './styles'

export type ToggleProps = {
  onCheck?: (status: boolean) => void
  isChecked?: boolean
  label?: string
  labelFor?: string
  value?: string | ReadonlyArray<string> | number
} & InputHTMLAttributes<HTMLInputElement>

const Toggle = ({
  onCheck,
  isChecked = false,
  label,
  labelFor = '',
  value,
  ...props
}: ToggleProps) => {
  // controlled component (state)
  const [checked, setChecked] = useState(isChecked)

  const onChange = () => {
    const status = !checked // true => false => true
    setChecked(status)

    !!onCheck && onCheck(status)
  }

  return (
    <S.Toggle htmlFor="toggle">
      <input
        name="toggle"
        defaultChecked={isChecked}
        onChange={onChange}
        id={labelFor}
        type="checkbox"
        value={value}
        {...props}
      />
      <span hidden>
        <svg
          aria-hidden="true"
          focusable="false"
          className="Toggle__icon Toggle__icon--checkmark"
          width="10"
          height="14"
          viewBox="0 0 18 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.08471 10.6237L2.29164 6.83059L1 8.11313L6.08471 13.1978L17 2.28255L15.7175 1L6.08471 10.6237Z"
            fill="currentcolor"
            stroke="currentcolor"
          />
        </svg>
        <svg
          aria-hidden="true"
          focusable="false"
          className="Toggle__icon Toggle__icon--cross"
          width="10"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.167 0L6.5 4.667L1.833 0L0 1.833L4.667 6.5L0 11.167L1.833 13L6.5 8.333L11.167 13L13 11.167L8.333 6.5L13 1.833L11.167 0Z"
            fill="currentcolor"
          />
        </svg>
      </span>
      {!!label && label}
    </S.Toggle>
  )
}

export default Toggle
