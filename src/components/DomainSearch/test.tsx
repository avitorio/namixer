import React from 'react'
import userEvent from '@testing-library/user-event'
import { render, screen } from 'utils/test-utils'

import DomainSearch from '.'

import items from './mock'

export const initialSearchValues = {
  word: '',
  type: 'topWords',
  order: 'suffix',
  size: '1',
  line: 0
}

describe('<DomainSearch />', () => {
  let setValues = jest.fn()
  const values = { ...initialSearchValues, word: 'keyword' }

  it('should render the search bar and button', () => {
    render(
      <DomainSearch
        items={items}
        onSubmit={jest.fn}
        searching={false}
        values={values}
        setValues={setValues}
      />
    )
    expect(screen.getByPlaceholderText(/type in a word/i)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /search domains/i })
    ).toBeInTheDocument()
  })

  it('should render the search options', () => {
    render(
      <DomainSearch
        items={items}
        onSubmit={jest.fn}
        searching={false}
        values={values}
        setValues={setValues}
      />
    )

    expect(screen.getByRole('radio', { name: /alphabet/i })).toBeInTheDocument()
  })

  it('should check initial values are passed', () => {
    render(
      <DomainSearch
        items={items}
        onSubmit={jest.fn}
        searching={false}
        values={values}
        setValues={setValues}
      />
    )

    expect(screen.getByLabelText(/popular words/i)).toBeChecked()
  })

  it('should return domains on search', () => {
    const onSubmit = jest.fn()

    render(
      <DomainSearch
        items={items}
        onSubmit={onSubmit}
        searching={false}
        values={{ ...values, word: 'keyword' }}
        setValues={setValues}
      />
    )

    userEvent.click(screen.getByRole('button', { name: /search domains/i }))
    expect(onSubmit).toBeCalledWith(
      {
        ...initialSearchValues,
        word: 'keyword',
        type: 'topWords',
        order: 'suffix'
      },
      false
    )
  })

  it('should make radio button changes', () => {
    const onSubmit = jest.fn()
    setValues = jest.fn(() => {
      values.order = 'prefix'
    })

    render(
      <DomainSearch
        items={items}
        onSubmit={onSubmit}
        searching={false}
        values={values}
        setValues={setValues}
      />
    )

    userEvent.click(screen.getByLabelText(/prefix/i))

    userEvent.click(screen.getByRole('button', { name: /search domains/i }))
    expect(setValues).toHaveBeenCalled()
    expect(onSubmit).toBeCalledWith(
      {
        ...initialSearchValues,
        word: 'keyword',
        type: 'topWords',
        order: 'prefix'
      },
      false
    )
  })
})
