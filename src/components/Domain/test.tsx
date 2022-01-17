import { AppProvider } from 'utils/appContext'
import { render } from 'utils/test-utils'

import Domain from '.'

describe('<Domain />', () => {
  it('should render the domain row', () => {
    const { container } = render(
      <AppProvider>
        <Domain
          {...{
            domain: 'namixer.com',
            status: 'available',
            setOpenAlert: () => true
          }}
        />
      </AppProvider>
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
