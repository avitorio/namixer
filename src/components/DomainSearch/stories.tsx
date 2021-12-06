import { Story, Meta } from '@storybook/react/types-6-0'
import DomainSearch, { DomainSearchProps } from '.'

import items from './mock'

export default {
  title: 'DomainSearch',
  component: DomainSearch,
  args: {
    items
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<DomainSearchProps> = (args) => (
  <DomainSearch {...args} />
)

export const WithInitialValues: Story<DomainSearchProps> = (args) => (
  <DomainSearch {...args} values={{ type: 'alphabet', order: 'suffix' }} />
)
