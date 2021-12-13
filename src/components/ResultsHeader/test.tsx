import { render } from 'utils/test-utils'

import { results } from 'templates/Home/resultsMock'
import ResultsHeader from '.'

describe('<ResultsHeader />', () => {
  it('should render the heading', () => {
    const { container } = render(
      <ResultsHeader
        results={results}
        setHideTaken={() => false}
        hideTaken={false}
      />
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
