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
import isAlphaNumeric from 'utils/isAlphanumeric'

export type SearchOptionsProps = {
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
  tooltip?: {
    title: string
    description: string
    keyword: string
    example: string
  }
}

export type DomainSearchOptionsProps = {
  searchOptions: SearchOptionsProps[]
  onSubmit: (values: SearchValues, fetchMore: boolean) => void
  searching?: boolean
  values: SearchValues
  setValues: Dispatch<SetStateAction<SearchValues>>
}

const DomainSearch = ({
  searchOptions,
  onSubmit,
  searching = false,
  values,
  setValues
}: DomainSearchOptionsProps) => {
  const [error, setError] = useState('')
  const [placeholderText, setPlaceholderText] = useState(
    'Type in a word, ex: magical'
  )

  const handleChange = (name: string, value: string) => {
    setValues((s) => {
      if (name === 'type' && value !== 'topWords') {
        return { ...s, [name]: value, size: value === 'alphabet' ? '1' : '2' }
      }
      return { ...s, [name]: value }
    })
  }

  const checkForErrors = () => {
    if (values.word === '') {
      setError('Please, type in a word, ex: magical')
      setPlaceholderText('Please, type in a word, ex: magical')
      return true
    }

    if (!isAlphaNumeric(String(values.word))) {
      setError('Please, use alphanumeric characters.')
      return true
    }

    return false
  }

  const handleFilter = (fetchMore = false) => {
    const hasErrors = checkForErrors()
    if (!hasErrors) {
      console.log('clicked')
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

        <S.ErrorMessage>{error}</S.ErrorMessage>
      </S.MainSearch>

      <S.SearchOptions>
        {searchOptions.map((item) => (
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
                    tooltip={field.tooltip}
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
                    id="size"
                    name="size"
                    aria-label="size"
                    onChange={(e) => handleChange('size', e.target.value)}
                  >
                    {item.fields[values.type].map((value) => {
                      return (
                        <option
                          key={values.type + value.name}
                          value={value.name}
                        >
                          {value.name}
                        </option>
                      )
                    })}
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
