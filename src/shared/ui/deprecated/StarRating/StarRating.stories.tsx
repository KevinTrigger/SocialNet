import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StarRating } from "./StarRating";
import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "shared/const/theme";

const meta: Meta<typeof StarRating> = {
  title: "ui/StarRating",
  component: StarRating,
  args: {}
};

export default meta;

type Story = StoryObj<typeof StarRating>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)]
};