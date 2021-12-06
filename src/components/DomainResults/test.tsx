import { render } from 'utils/test-utils'

import ResultsList from '.'

describe('<ResultsList />', () => {
  it('should render the heading', () => {
    const { container } = render(<ResultsList />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
