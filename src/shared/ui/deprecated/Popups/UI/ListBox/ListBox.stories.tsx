import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { ListBox } from "./ListBox";
import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "shared/const/theme";

const meta: Meta<typeof ListBox> = {
  title: "ui/ListBox",
  component: ListBox,
};

const items = [
  { content: "content1", value: "value1" },
  { content: "content2", value: "value2" },
  { content: "content3", value: "value3" },
];

export default meta;

type Story = StoryObj<typeof ListBox>;

export const Light: Story = {
  args: {
    items,
    defaultValue: "choose variant",
    label: "Укажите страну",
  },
};

export const Dark: Story = {
  args: {
    items,
    defaultValue: "choose variant",
    label: "Укажите страну",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
