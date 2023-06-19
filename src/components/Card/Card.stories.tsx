import { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";

const meta: Meta<typeof Card> = {
  component: Card,
  title: "Hylton/Card",
};

export default meta;

type Story = StoryObj<typeof Card>;

export const MyCard: Story = {
  args: {
    cardTitle: "My Schedule",
    cardDesc: "Call to check avaliable days",
    img: "https://images.unsplash.com/photo-1686563873984-9ee2048d1c52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    bgColor: "#efd5d0",
  },
};
