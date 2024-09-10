import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof Input> = {
  title: "ui/Input",
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Light: Story = {
  args: {
    placeholder: "Введите текст",
  },
};

export const Dark: Story = {
  args: {
    placeholder: "Введите текст",
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};
