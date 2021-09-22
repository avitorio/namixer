import { Story, Meta } from '@storybook/react/types-6-0'
import { FilterAlt } from '@styled-icons/material/FilterAlt'
import Button, { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: ''
    }
  }
} as Meta

export const Default: Story<ButtonProps> = (args) => <Button {...args} />

Default.args = {
  children: 'Buy now'
}

export const withIcon: Story<ButtonProps> = (args) => <Button {...args} />

withIcon.args = {
  size: 'small',
  children: 'Buy now',
  icon: <FilterAlt />,
  minimal: false,
  outline: false
}

export const asLink: Story<ButtonProps> = (args) => <Button {...args} />

asLink.args = {
  size: 'large',
  children: 'Buy now',
  as: 'a',
  href: '/link'
}

export const outlined: Story<ButtonProps> = (args) => <Button {...args} />

outlined.args = {
  children: 'Buy now',
  outline: true
}
export const minimal: Story<ButtonProps> = (args) => <Button {...args} />

minimal.args = {
  children: 'Buy now',
  minimal: true
}
