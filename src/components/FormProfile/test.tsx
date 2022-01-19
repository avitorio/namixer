import { render, screen } from 'utils/test-utils'

import FormProfile from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const push = jest.fn()

useRouter.mockImplementation(() => ({
  push,
  query: '',
  asPath: '',
  route: '/'
}))

describe('<FormProfile />', () => {
  it('should render the profile form', () => {
    render(<FormProfile />)

    expect(
      screen.getByRole('heading', { name: /my profile/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('textbox', { name: /name/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /e-mail/i })).toBeInTheDocument()

    expect(
      screen.getByRole('link', { name: /reset password/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /delete account/i })
    ).toBeInTheDocument()
  })
})
