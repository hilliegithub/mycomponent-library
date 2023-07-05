import { Meta, StoryObj } from '@storybook/react'
import Hero from './Hero'

const meta: Meta<typeof Hero> = {
  component: Hero,
  title: 'Hylton/HeroImage',
}
export default meta

type Story = StoryObj<typeof Hero>

export const HeroImage: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1597933534024-debb6104af15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    disabled: false,
    HeroText: 'Wrong Impression',
  },
}
