import { Story, Meta } from '@storybook/react/types-6-0'
import DomainSearch, { DomainSearchOptionsProps } from '.'

import searchOptions from './searchOptions'

export default {
  title: 'DomainSearch',
  component: DomainSearch,
  args: {
    searchOptions
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<DomainSearchOptionsProps> = (args) => (
  <DomainSearch {...args} />
)

export const WithInitialValues: Story<DomainSearchOptionsProps> = (args) => (
  <DomainSearch {...args} values={{ type: 'alphabet', order: 'suffix' }} />
)
