import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Select, SelectOptions } from "./Select";

const meta: Meta<typeof Select> = {
  title: "ui/Select",
  component: Select,
};

const options: SelectOptions<"asc" | "desc">[] = [
  { content: "Первый пункт", value: "asc" },
  { content: "Второй пункт", value: "desc" },
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
