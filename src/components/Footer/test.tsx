import { render } from 'utils/test-utils'

import Footer from '.'

describe('<Footer />', () => {
  it('should render the footer.', () => {
    const { container } = render(<Footer />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
