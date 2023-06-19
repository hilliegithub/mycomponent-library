import { Meta, StoryObj } from "@storybook/react";
import Dropdown from "./Dropdown";

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
  title: "Hylton/Dropdown",
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const MyDropdown: Story = {
  args: {
    options: ["option1", "option2", "selectall"],
    bgColor: "#c2d4f2",
    disabled: false,
  },
};
