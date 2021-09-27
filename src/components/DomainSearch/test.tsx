import { render, screen } from 'utils/test-utils'

import DomainSearch from '.'

import items from './mock'

describe('<DomainSearch />', () => {
  it('should render the search bar and button', () => {
    render(<DomainSearch items={items} />)

    expect(screen.getByPlaceholderText(/type in a word/i)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /search domains/i })
    ).toBeInTheDocument()
  })

  it('should render the search options', () => {
    render(<DomainSearch items={items} />)

    expect(screen.getByRole('radio', { name: /alphabet/i })).toBeInTheDocument()
  })
})
