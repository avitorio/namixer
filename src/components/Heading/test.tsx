import { render, screen } from 'utils/test-utils'

import Heading from '.'

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    render(<Heading>Namixer</Heading>)
    expect(screen.getByRole('heading', { name: /namixer/i })).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a black heading when color is passed', () => {
    render(<Heading color="black">Namixer</Heading>)
    expect(screen.getByRole('heading', { name: /namixer/i })).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a heading with a line to the left side', () => {
    render(<Heading lineLeft>Namixer</Heading>)
    expect(screen.getByRole('heading', { name: /namixer/i })).toHaveStyle({
      'border-left': '0.7rem solid #E65A6D'
    })
  })

  it('should render a heading with a line at the bottom', () => {
    render(<Heading lineBottom>Namixer</Heading>)
    expect(screen.getByRole('heading', { name: /namixer/i })).toHaveStyleRule(
      'border-bottom',
      '0.5rem solid #E65A6D',
      {
        modifier: '::after'
      }
    )
  })

  it('should render a heading with a small size', () => {
    render(<Heading size="small">Namixer</Heading>)
    expect(screen.getByRole('heading', { name: /namixer/i })).toHaveStyle({
      'font-size': '1.6rem'
    })

    expect(screen.getByRole('heading', { name: /namixer/i })).toHaveStyleRule(
      'width',
      '3rem',
      {
        modifier: '::after'
      }
    )
  })

  it('should render a heading with a huge size', () => {
    render(<Heading size="huge">Namixer</Heading>)

    expect(screen.getByRole('heading', { name: /namixer/i })).toHaveStyle({
      'font-size': '5.2rem'
    })
  })

  it('should render a Heading with a primary line color', () => {
    render(
      <Heading lineColor="primary" lineLeft lineBottom>
        Lorem Ipsum
      </Heading>
    )

    const heading = screen.getByRole('heading', { name: /lorem ipsum/i })
    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #E65A6D' })
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #E65A6D', {
      modifier: '::after'
    })
  })

  it('should render a Heading with a secondary line color', () => {
    render(
      <Heading lineColor="secondary" lineLeft lineBottom>
        Lorem Ipsum
      </Heading>
    )

    const heading = screen.getByRole('heading', { name: /lorem ipsum/i })
    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #C9FCC1' })
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #C9FCC1', {
      modifier: '::after'
    })
  })
})
