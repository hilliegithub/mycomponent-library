import { Meta, StoryObj } from '@storybook/react'
import Table from './Table'

const meta: Meta<typeof Table> = {
  component: Table,
  title: 'Hylton/Table',
}

export default meta

type Story = StoryObj<typeof Table>

export const MyTable: Story = {
  args: {
    header: 'My Custom Table',
    colHeaders: ['ice', 'random', 'football'],
    tableValues: [
      ['cream', 'values', 'Messi'],
      ['spice', 'water', 'Xavi'],
      ['machine', 'email', 'Iniesta'],
    ],
    footer: 'My Footer',
    bgColor: '#c2d4f2',
    disabled: false,
  },
}
