import { Story, Meta } from '@storybook/react/types-6-0'
import Popup, { PopupProps } from '.'

export default {
  title: 'Popup',
  component: Popup,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<PopupProps> = (args) => <Popup {...args} />

Default.args = {
  children: 'content'
}
