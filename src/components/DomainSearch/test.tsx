import userEvent from '@testing-library/user-event'
import { render, screen } from 'utils/test-utils'

import DomainSearch, { initialSearchValues } from '.'

import items from './mock'

describe('<DomainSearch />', () => {
  it('should render the search bar and button', () => {
    render(<DomainSearch items={items} onSubmit={jest.fn} />)

    expect(screen.getByPlaceholderText(/type in a word/i)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /search domains/i })
    ).toBeInTheDocument()
  })

  it('should render the search options', () => {
    render(<DomainSearch items={items} onSubmit={jest.fn} />)

    expect(screen.getByRole('radio', { name: /alphabet/i })).toBeInTheDocument()
  })

  it('should check initial values are passed', () => {
    render(<DomainSearch items={items} onSubmit={jest.fn} />)

    expect(screen.getByLabelText(/popular words/i)).toBeChecked()
  })

  it('should return domains on search', () => {
    const onSubmit = jest.fn()

    render(
      <DomainSearch
        items={items}
        onSubmit={onSubmit}
        initialValues={{ ...initialSearchValues, word: 'keyword' }}
      />
    )

    userEvent.click(screen.getByRole('button', { name: /search domains/i }))
    expect(onSubmit).toBeCalledWith({
      ...initialSearchValues,
      word: 'keyword',
      type: 'topWords',
      order: 'suffix'
    })
  })

  it('should make radio button changes', () => {
    const onSubmit = jest.fn()

    render(
      <DomainSearch
        items={items}
        onSubmit={onSubmit}
        initialValues={{ ...initialSearchValues, word: 'keyword' }}
      />
    )

    userEvent.click(screen.getByLabelText(/prefix/i))

    userEvent.click(screen.getByRole('button', { name: /search domains/i }))
    expect(onSubmit).toBeCalledWith({
      ...initialSearchValues,
      word: 'keyword',
      type: 'topWords',
      order: 'prefix'
    })
  })
})
