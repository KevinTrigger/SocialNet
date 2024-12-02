import { Drawer } from "./Drawer";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Drawer> = {
  title: "ui/Drawer",
  component: Drawer,
};

export default meta;

type Story = StoryObj<typeof Drawer>;

export const Light: Story = {
  args: {},
};