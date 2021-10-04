import { useState } from 'react'
import Button from 'components/Button'
import Radio from 'components/Radio'
import SearchField from 'components/SearchField'
import * as S from './styles'

export type ItemProps = {
  title: string
  titleAfter?: string
  type: string
  name: string
  fields: Field[]
}

type Field = {
  label: string
  name: string
}

type Values = {
  [field: string]: boolean | string
}

export type DomainSearchProps = {
  items: ItemProps[]
  initialValues?: Values
  onFilter: (values: Values) => void
}

const DomainSearch = ({
  items,
  onFilter,
  initialValues = {}
}: DomainSearchProps) => {
  const [values, setValues] = useState(initialValues)

  const handleChange = (name: string, value: string | boolean) => {
    setValues((s) => ({ ...s, [name]: value }))
  }

  const handleFilter = () => {
    onFilter(values)
  }

  return (
    <S.Wrapper>
      <S.MainSearch>
        <SearchField name="word" placeholder="Type in a word" type="text" />
        <Button size="xlarge" onClick={handleFilter}>
          Search Domains
        </Button>
      </S.MainSearch>
      {items.map((item) => (
        <div key={item.title}>
          <span>{item.title}</span>
          {item.fields.map((field) => (
            <Radio
              key={field.name}
              id={field.name}
              name={item.name}
              label={field.label}
              labelFor={field.name}
              value={field.name}
              defaultChecked={field.name === values[item.name]}
              onChange={() => handleChange(item.name, field.name)}
            />
          ))}
        </div>
      ))}
    </S.Wrapper>
  )
}

export default DomainSearch
