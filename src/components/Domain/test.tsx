import { render } from 'utils/test-utils'

import Domain from '.'

describe('<Domain />', () => {
  it('should render the heading', () => {
    const { container } = render(
      <Domain
        {...{
          domain: 'namixer.com',
          status: 'available',
          setOpenAlert: () => true
        }}
      />
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
