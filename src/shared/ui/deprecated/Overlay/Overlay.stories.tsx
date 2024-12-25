import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Overlay } from "./Overlay";
import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "shared/const/theme";

const meta: Meta<typeof Overlay> = {
  title: "ui/Overlay",
  component: Overlay,
  args: {},
};

export default meta;

type Story = StoryObj<typeof Overlay>;

export const Light: Story = {};
export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
