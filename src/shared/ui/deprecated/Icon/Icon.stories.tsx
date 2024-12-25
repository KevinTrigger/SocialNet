import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Icon, IconTheme } from "./Icon";
import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "shared/const/theme";
import IconExample from "./storybook.svg?react";

const meta: Meta<typeof Icon> = {
  title: "ui/Icon",
  component: Icon,
  args: {
    Svg: IconExample,
  },
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Light: Story = {
  args: {},
};

export const LightCustomSize: Story = {
  args: {
    size: 100,
  },
};

export const LightInverted: Story = {
  args: {
    theme: IconTheme.INVERTED,
  },
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const DarkCustomSize: Story = {
  args: {
    size: 100,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const DarkInverted: Story = {
  args: {
    theme: IconTheme.INVERTED,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
