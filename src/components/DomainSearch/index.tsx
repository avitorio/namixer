import { Dispatch, Fragment, SetStateAction, useState } from 'react'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import Button from 'components/Button'
import RadioButton from 'components/RadioButton'
import SearchField from 'components/SearchField'
import { SearchValues } from 'templates/Home'

import * as S from './styles'
import Select from 'components/Select'
import { FormLoading } from 'components/Form'
import MediaMatch from 'components/MediaMatch'

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
  selected?: boolean
}

export type DomainSearchProps = {
  items: ItemProps[]
  onSubmit: (values: SearchValues, fetchMore: boolean) => void
  searching?: boolean
  values: SearchValues
  setValues: Dispatch<SetStateAction<SearchValues>>
}

const DomainSearch = ({
  items,
  onSubmit,
  searching = false,
  values,
  setValues
}: DomainSearchProps) => {
  const [error, setError] = useState('')
  const [placeholderText, setPlaceholderText] = useState(
    'Type in a word, ex: magical'
  )

  const handleChange = (name: string, value: string) => {
    setValues((s) => {
      if (name === 'type' && value === 'dictionary') {
        console.log('dictionary')
        return { ...s, [name]: value, size: '2' }
      }

      if (name === 'type' && value === 'alphabet') {
        console.log('alphabet')
        return { ...s, [name]: value, size: '1' }
      }

      return { ...s, [name]: value }
    })
  }

  const checkForErrors = () => {
    if (values.word === '') {
      setError('Please enter a word')
      setPlaceholderText('Please, type in a word, ex: magical')
    }
  }

  const handleFilter = (fetchMore = false) => {
    checkForErrors()
    if (values.word !== '') {
      onSubmit(values, fetchMore)
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

        <MediaMatch greaterThan="medium">
          <Button
            size="xlarge"
            onClick={() => handleFilter(false)}
            aria-label="Search Domains"
          >
            {searching ? <FormLoading /> : 'Search Domains'}
          </Button>
        </MediaMatch>

        <MediaMatch lessThan="medium">
          <Button size="medium" onClick={() => handleFilter(false)}>
            {searching ? <FormLoading /> : <SearchIcon />}
          </Button>
        </MediaMatch>
      </S.MainSearch>

      <S.SearchOptions>
        {items.map((item) => (
          <Fragment key={item.title}>
            {item.type === 'radio' && Array.isArray(item.fields) ? (
              <S.OptionsWrapper key={item.title}>
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
              </S.OptionsWrapper>
            ) : (
              values.type !== 'topWords' &&
              !Array.isArray(item.fields) && (
                <S.OptionsWrapper key={item.title}>
                  <span>{item.title}</span>
                  <Select
                    id={item.name}
                    name={item.name}
                    aria-label={item.name}
                    onChange={(e) => handleChange(item.name, e.target.value)}
                  >
                    {item.fields[values.type].map((value) => (
                      <option
                        key={value.name}
                        value={value.name}
                        selected={!!value?.selected}
                      >
                        {value.label}
                      </option>
                    ))}
                  </Select>
                  <span>{item.titleAfter}</span>
                </S.OptionsWrapper>
              )
            )}
          </Fragment>
        ))}
      </S.SearchOptions>
    </S.Wrapper>
  )
}

export default DomainSearch
