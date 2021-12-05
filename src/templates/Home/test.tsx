import 'match-media-mock'

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

describe('<Home />', () => {
  it('should render banner and showcases', () => {
    // render(<Home />)
  })
})
