import userEvent from '@testing-library/user-event'
import { render, screen } from 'utils/test-utils'

import DomainSearch from '.'

import items from './mock'

describe('<DomainSearch />', () => {
  it('should render the search bar and button', () => {
    render(<DomainSearch items={items} onFilter={jest.fn} />)

    expect(screen.getByPlaceholderText(/type in a word/i)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /search domains/i })
    ).toBeInTheDocument()
  })

  it('should render the search options', () => {
    render(<DomainSearch items={items} onFilter={jest.fn} />)

    expect(screen.getByRole('radio', { name: /alphabet/i })).toBeInTheDocument()
  })

  it('should check initial values are passed', () => {
    render(
      <DomainSearch
        items={items}
        initialValues={{ type: 'alphabet' }}
        onFilter={jest.fn}
      />
    )

    expect(screen.getByRole('radio', { name: /alphabet/i })).toBeChecked()
  })

  it('should return domains on search', () => {
    const onFilter = jest.fn()

    render(<DomainSearch items={items} onFilter={onFilter} />)

    userEvent.click(screen.getByLabelText(/alphabet/i))
    userEvent.click(screen.getByLabelText(/suffix/i))

    userEvent.click(screen.getByRole('button', { name: /search domains/i }))
    expect(onFilter).toBeCalledWith({ type: 'alphabet', order: 'suffix' })
  })

  it('should make radio button changes', () => {
    const onFilter = jest.fn()

    render(
      <DomainSearch
        items={items}
        onFilter={onFilter}
        initialValues={{ type: 'alphabet', order: 'suffix' }}
      />
    )

    userEvent.click(screen.getByLabelText(/prefix/i))

    userEvent.click(screen.getByRole('button', { name: /search domains/i }))
    expect(onFilter).toBeCalledWith({ type: 'alphabet', order: 'prefix' })
  })
})
