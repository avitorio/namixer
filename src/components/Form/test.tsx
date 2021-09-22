import { render } from 'utils/test-utils'

import { FormLink, FormWrapper } from '.'

describe('<Form />', () => {
  it('should render the heading', () => {
    const { container } = render(
      <FormWrapper>
        <FormLink>
          My nice <a href="#">link</a>
        </FormLink>
      </FormWrapper>
    )

    expect(container.parentElement).toMatchInlineSnapshot(`
.c0 .sc-jSFjdj {
  margin: 0.8rem 0;
}

.c0 .sc-gKAaRy {
  margin: 3.2rem auto 1.6rem;
}

.c1 {
  font-size: 1.4rem;
  color: #030517;
  text-align: center;
}

.c1 a {
  color: #C240FF;
  -webkit-text-decoration: none;
  text-decoration: none;
  border-bottom: 0.1rem solid #C240FF;
  -webkit-transition: color,border,0.1s ease-in-out;
  transition: color,border,0.1s ease-in-out;
}

.c1 a:hover {
  color: #b20dff;
  border-bottom: 0.1rem solid #b20dff;
}

<body>
  <div>
    <div
      class="c0"
    >
      <div
        class="c1"
      >
        My nice 
        <a
          href="#"
        >
          link
        </a>
      </div>
    </div>
  </div>
</body>
`)
  })
})
