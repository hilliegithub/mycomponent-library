import { Meta, StoryObj } from "@storybook/react";
import Button from "./Buttton";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Hylton/Button",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    text: "Pineapple",
    bgColor: "#2596be",
    disabled: false,
  },
};
