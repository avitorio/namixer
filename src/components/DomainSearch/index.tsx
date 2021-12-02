import { useState } from 'react'
import Button from 'components/Button'
import RadioButton from 'components/RadioButton'
import SearchField from 'components/SearchField'
import { SearchValues } from 'templates/Home'

import * as S from './styles'
import Select from 'components/Select'
import { FormLoading } from 'components/Form'

export type ItemProps = {
  title: string
  titleAfter?: string
  type: string
  name: string
  fields:
    | Field[]
    | {
        [field: string]: Field[]
      }
}

type Field = {
  label: string
  name: string
}

export type DomainSearchProps = {
  items: ItemProps[]
  initialValues?: SearchValues
  onSubmit: (values: SearchValues) => void
  searching?: boolean
}

export const initialSearchValues = {
  word: '',
  type: 'topWords',
  order: 'suffix',
  size: '1',
  line: 0
}

const DomainSearch = ({
  items,
  onSubmit,
  initialValues = initialSearchValues,
  searching = false
}: DomainSearchProps) => {
  const [values, setValues] = useState<SearchValues>(initialValues)
  const [error, setError] = useState('')
  const [placeholderText, setPlaceholderText] = useState(
    'Type in a word, ex: magical'
  )

  const handleChange = (name: string, value: string) => {
    setValues((s) => ({ ...s, [name]: value }))
  }

  const checkForErrors = () => {
    if (values.word === '') {
      setError('Please enter a word')
      setPlaceholderText('Please, type in a word, ex: magical')
    }
  }

  const handleFilter = () => {
    checkForErrors()
    if (values.word !== '') {
      onSubmit(values)
    }
  }

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (values.word !== '') {
      setError('')
      setPlaceholderText('Type in a word, ex: magical')
    }
    if (e.key === 'Enter') {
      handleFilter()
    }
  }

  return (
    <S.Wrapper>
      <S.MainSearch>
        <SearchField
          name="word"
          placeholder={placeholderText}
          type="text"
          onInput={(v) => handleChange('word', v)}
          onKeyUp={handleKeyUp}
          error={error}
        />
        <Button size="xlarge" onClick={handleFilter}>
          {searching ? <FormLoading /> : <span>Search Domains</span>}
        </Button>
      </S.MainSearch>
      <S.SearchOptions>
        {items.map((item) => (
          <S.OptionsWrapper key={item.title}>
            {item.type === 'radio' && Array.isArray(item.fields) ? (
              <>
                <span>{item.title}</span>
                {item.fields.map((field) => (
                  <RadioButton
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
                {item.titleAfter && <span>{item.titleAfter}</span>}
              </>
            ) : (
              values.type !== 'topWords' &&
              !Array.isArray(item.fields) && (
                <>
                  <span>{item.title}</span>
                  <Select
                    id={item.name}
                    name={item.name}
                    aria-label={item.name}
                    onChange={(e) => handleChange(item.name, e.target.value)}
                  >
                    {item.fields[values.type].map((value) => (
                      <option key={value.name} value={value.name}>
                        {value.label}
                      </option>
                    ))}
                  </Select>
                  <span>{item.titleAfter}</span>
                </>
              )
            )}
          </S.OptionsWrapper>
        ))}
      </S.SearchOptions>
    </S.Wrapper>
  )
}

export default DomainSearch
