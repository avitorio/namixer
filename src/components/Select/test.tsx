import { render, screen } from 'utils/test-utils'
import userEvent from '@testing-library/user-event'
import theme from 'styles/theme'

import Select from '.'

describe('<Select />', () => {
  it('should render with label (white)', () => {
    const { container } = render(
      <Select id="Select" name="Select" data-testid="select">
        <option value="1">Select</option>
      </Select>
    )

    const label = screen.getByTestId('select')
    expect(label).toBeInTheDocument()
    expect(label).toHaveStyle({ color: theme.colors.neutral.neutral900 })
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should dispatch onCheck when option changes', async () => {
    const onCheck = jest.fn()
    render(
      <Select
        id="Select"
        name="Select"
        data-testid="select"
        onChange={onCheck}
        defaultValue="1"
      >
        <option value="1">A</option>
        <option value="2">B</option>
      </Select>
    )

    expect(onCheck).not.toHaveBeenCalled()
    const optionB = screen.getByRole('option', {
      name: 'B'
    }) as HTMLOptionElement

    userEvent.selectOptions(screen.getByTestId('select'), ['2'])
    expect(optionB.selected).toBe(true)
  })

  it('Should be accessible with tab', () => {
    render(
      <Select id="Select" name="Select" data-testid="select">
        <option value="1">Select</option>
      </Select>
    )

    const select = screen.getByTestId('select')

    expect(document.body).toHaveFocus()

    userEvent.tab()

    expect(select).toHaveFocus()
  })
})
