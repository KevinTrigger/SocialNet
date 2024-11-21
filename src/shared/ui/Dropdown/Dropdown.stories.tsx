import { Dropdown } from "./Dropdown";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Dropdown> = {
  title: "ui/Dropdown",
  component: Dropdown,
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Light: Story = {
  args: {},
};