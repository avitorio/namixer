import styled, { css } from 'styled-components'
import { lighten } from 'polished'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Select = styled.select`
  ${({ theme }) => css`
    color: ${theme.colors.neutral.neutral900};
    display: inline-block;
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    padding: 1rem 3rem 1rem 2rem;
    border: 2px solid #ffffff00;
    border-radius: ${theme.border.radius.small};
    outline: none;
    appearance: none;
    background-color: ${theme.colors.neutral.neutral100};
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABQCAYAAAC+neOMAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAA5tJREFUeJzt2s9rHGUYwPHvM9lpKjYQFENBEIzSelHwPxBMeuhNJYtxAioehKyiNw8ik148CFLqtpG9WEI6G38h1EhPQgTvnjVCD4pVPBg8eKhJ5vHS3Wzipju7O+/7TuH5nmZnZncePpmEd4eAZVmWZVmWZVmWZVmWZVmWZVnWEEmRk9I0jU6fOfPYvsgD5PkfjST5RUTU9XCuaq6tPRhFk7NM5Lf3pqd/euv8+duD3nNXqDRNo5mzZxuq+o4gD3cPKD9C/m5jaemrEub2VvPatScj5ENE5nt2/6Oqn8Qn4vder9f/Pu69x0K1Wq147/6pDYQXjjtHlZU3ll66MOLcXmu22/NRrtcRua/vCarbTERzjcXFX/sd7gvVarXi3VNTnwo8P3gEvdBIkpXiI/vvyvrGOY30usDJu52ncFMieaYfVnR0R7q1Vds9NZUVQwKQ9EqWrRSc2XtFkQAEZjXX71prnz9y9NghqHRrqzbz2+/rAgvDjVNNrGGQOgnM7tX2/od1CGrm1q0PEF4cbaxqYY2C1NOjuxO7m5du3Jjs7OhCfZRlT6jy9njjVQOr2W7Pj4EEgIg8VdvZea3zOurZWBCRQuuqAZcIitVst+dF+XocpJ66f4IOfvVUHi/hg+8UBqtkJODApAslogNXp0NexCtW+Uig8G9nu/eO+qGsCxzkB8sFEoCgXZPeO+ozhZ0yL3Tnk51iuUICEGh1trtQy0myI+jLqrpf9gVdYa1m2ZwrJJSPl5Pk287LQ+uoRpJsRsLivYC1mmVzObLpBAldf+hE7c3ePX2XA6tZtpArGyIy4WCIsb8bOkeK41fr9fqhm+XYdVNVsUIgwYDnUVXDCoUEBZ5wVgUrJBIUfBQcGuvy+sazRPpNKCQoCAXhsKqABENAgX+sqiDBkFDgD6tKSDACFLjH0jz6vkpIMCIUuMVS1X1HP4SRkGAMKHB9Z5Xd6EgwJhTcK1jjIUEJUFB1rPGRoCQoqCpWOUhQIhRUDas8JCgZCqqCVS4SOICC0FjlI4EjKAiF5QYJHEKBbyx3SOAYCnxhuUUCD1Dg/LuhcyTwBAWusPwggUcoKBvLHxJ4hoKysPwiQQAoGBfLPxIEgoJRscIgQUAoGBYrHBIEhoKiWGGRoM+/T/tuOUm+EOE5Vf3r6DFV3Ud5/8/t7VdCIkEF7qhOF69enY7jyQWBp4EY+FlEv1xOkpuhZ7Msy7Isy7Isy7IsyxrcfzNeLxtxSlaeAAAAAElFTkSuQmCC);
    background-repeat: no-repeat, repeat;
    background-position: right 0.7em top 50%, 0px 0px;
    background-size: 0.65em, 100%;

    &:hover {
      background-color: ${lighten(0.05, theme.colors.secondary)};
    }

    ${media.greaterThan('medium')`
    padding: ${theme.spacings.xsmall} 30px ${theme.spacings.xsmall} 20px;
    `}
  `}
`
