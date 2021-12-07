import { Story, Meta } from '@storybook/react/types-6-0'
import ResultsHeader, { ResultsHeaderProps } from '.'
import { results } from 'templates/Home/resultsMock'

export default {
  title: 'ResultsHeader',
  component: ResultsHeader,
  args: {
    results,
    setHideTaken: () => true
  }
} as Meta

export const Default: Story<ResultsHeaderProps> = (args) => (
  <ResultsHeader {...args} />
)
