import { render, screen, waitFor } from 'utils/test-utils'
import userEvent from '@testing-library/user-event'
import theme from 'styles/theme'

import RadioButton from '.'

describe('<RadioButton />', () => {
  it('should render with label (white)', () => {
    const { container } = render(
      <RadioButton label="RadioButton" labelFor="check" value="anyValue" />
    )

    const label = screen.getByText('RadioButton')
    expect(label).toBeInTheDocument()
    expect(label).toHaveStyle({ color: theme.colors.neutral.neutral900 })
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render without label', () => {
    render(<RadioButton />)

    expect(screen.queryByLabelText('RadioButton')).not.toBeInTheDocument()
  })

  it('should dispatch onCheck when label status changes', async () => {
    const onCheck = jest.fn()
    render(
      <RadioButton
        label="RadioButton"
        labelFor="RadioButton"
        onCheck={onCheck}
        value="anyValue"
      />
    )

    expect(onCheck).not.toHaveBeenCalled()

    userEvent.click(screen.getByLabelText('RadioButton'))
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })
    expect(onCheck).toHaveBeenCalledWith('anyValue')
  })

  it('Should be accessible with tab', () => {
    render(<RadioButton label="RadioButton" labelFor="RadioButton" />)

    const radioButton = screen.getByLabelText('RadioButton')

    expect(document.body).toHaveFocus()

    userEvent.tab()

    expect(radioButton).toHaveFocus()
  })
})
