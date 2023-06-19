import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Text from "./Text";

const meta: Meta<typeof Text> = {
  component: Text,
  title: "Hylton/Text",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  args: {
    bgColor: "#bde5bd",
    disabled: false,
    fontColor: "black",
    value: "Work",
  },
};
