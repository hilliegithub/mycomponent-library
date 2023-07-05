import { Meta, StoryObj } from '@storybook/react'
import Radio from './Radio'

const meta: Meta<typeof Radio> = {
  component: Radio,
  title: 'Hylton/Radio',
}
export default meta

type Story = StoryObj<typeof Radio>

export const MyRadio: Story = {
  args: {
    options: ['Huey', 'Dewey', 'Louie'],
    bgColor: '#c2d4f2',
    disabled: false,
  },
}
