import { Meta, StoryObj } from '@storybook/react'
import Label from './Label'

const meta: Meta<typeof Label> = {
  component: Label,
  title: 'Hylton/Label',
}

export default meta

type Story = StoryObj<typeof Label>

export const FirstLabel: Story = {
  args: {
    value: 'Default Label',
    disabled: false,
    bgColor: 'yellow',
  },
}
