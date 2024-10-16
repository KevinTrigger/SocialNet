import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Card } from "./Card";
import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { Text, TextSize } from "../Text/Text";

const children = (
  <Text title="Title" text="a more more text" size={TextSize.L} />
);

const meta: Meta<typeof Card> = {
  title: "ui/Card",
  component: Card,
  args: {
    children,
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
