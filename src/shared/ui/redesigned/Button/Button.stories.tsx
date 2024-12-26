import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "ui/Button",
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Clear: Story = {
  args: {
    variant: "clear",
    children: "Text",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Text",
  },
};
