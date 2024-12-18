import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Skeleton } from "./Skeleton";
import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "shared/const/theme";

const meta: Meta<typeof Skeleton> = {
  title: "ui/Skeleton",
  component: Skeleton,
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Light: Story = {
  args: {
    width: "100%",
    height: 200,
  },
};

export const LightCircle: Story = {
  args: {
    border: "50%",
    width: 100,
    height: 100,
  },
};

export const Dark: Story = {
  args: {
    width: "100%",
    height: 200,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const DarkCircle: Story = {
  args: {
    border: "50%",
    width: 100,
    height: 100,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
