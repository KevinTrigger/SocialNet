import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Select, SelectOptions } from "./Select";

const meta: Meta<typeof Select> = {
  title: "ui/Select",
  component: Select,
};

const options: SelectOptions[] = [
  { content: "Первый пункт", value: 1 },
  { content: "Второй пункт", value: 2 },
  { content: "Третий пункт", value: 3 },
];

export default meta;

type Story = StoryObj<typeof Select>;

export const Light: Story = {
  args: {
    label: "Укажите значение",
    options,
  },
};

export const Dark: Story = {
  args: {
    label: "Укажите значение",
    options,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
