import { render } from 'utils/test-utils'

import ResultsList from '.'

describe('<ResultsList />', () => {
  it('should render the heading', () => {
    const { container } = render(<ResultsList setOpenAlert={() => true} />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
