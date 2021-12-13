import { Story, Meta } from '@storybook/react/types-6-0'
import Domain from '.'

export default {
  title: 'Domain',
  component: Domain
} as Meta

export const Default: Story = () => (
  <Domain
    {...{
      domain: 'namixer.com',
      status: 'available',
      hideTaken: false,
      setOpenAlert: () => true
    }}
  />
)
