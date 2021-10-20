import { Story, Meta } from '@storybook/react/types-6-0'
import Select, { SelectProps } from '.'

export default {
  title: 'Form/Select',
  component: Select,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  },
  argTypes: {
    onCheck: { action: 'checked' }
  }
} as Meta

export const Default: Story<SelectProps> = (args) => (
  <>
    <Select id="primeiro" name="nome" {...args}>
      <option value="1">1</option>
    </Select>
  </>
)
