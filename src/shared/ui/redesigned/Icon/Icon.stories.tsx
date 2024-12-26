import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Icon } from "./Icon";
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

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
