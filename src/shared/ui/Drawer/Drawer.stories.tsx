import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Drawer } from "./Drawer";
import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "shared/const/theme";

const meta: Meta<typeof Drawer> = {
  title: "ui/Drawer",
  component: Drawer,
  args: {
    children: "OPENED DRAWER",
    isOpen: true,
  },
};

export default meta;

type Story = StoryObj<typeof Drawer>;

export const LightOpened: Story = {
  args: {},
};

export const DarkOpened: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
