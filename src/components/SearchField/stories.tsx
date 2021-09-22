import { Story, Meta } from '@storybook/react/types-6-0'
import { Email } from '@styled-icons/material-outlined'

import SearchField, { SearchFieldProps } from '.'

export default {
  title: 'Form/SearchField',
  component: SearchField,
  args: {
    label: 'E-mail',
    name: 'email',
    icon: <Email />,
    initialValue: '',
    placeholder: 'john.cage@gmail.com',
    disabled: false
  },
  argTypes: {
    onInput: { action: 'changed' },
    icon: { type: '' }
  }
} as Meta

export const Default: Story<SearchFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <SearchField {...args} />
  </div>
)

export const withError: Story<SearchFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <SearchField {...args} />
  </div>
)

withError.args = {
  error: 'Ops...something is wrong'
}
