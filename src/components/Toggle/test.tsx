import { render } from 'utils/test-utils'

import Toggle from '.'

describe('<Toggle />', () => {
  it('should render the heading', () => {
    const { container } = render(<Toggle />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
