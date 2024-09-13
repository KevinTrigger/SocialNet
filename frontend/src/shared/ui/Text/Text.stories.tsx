import type { Meta, StoryObj } from "@storybook/react";
import { Text, TextTheme } from "./Text";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof Text> = {
  title: "ui/Text",
  component: Text,
};

export default meta;

type Story = StoryObj<typeof Text>;

export const LightNormal: Story = {
  args: {
    title: "Я заголовок",
    text: "Я обычный текст",
  },
};

export const LightNormalOnlyTitle: Story = {
  args: {
    title: "Заголовок без текста",
  },
};

export const LightNormalOnlyText: Story = {
  args: {
    text: "Текст без заголовка",
  },
};

export const DarkNormal: Story = {
  args: {
    title: "Я заголовок",
    text: "Я обычный текст",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const DarkNormalOnlyTitle: Story = {
  args: {
    title: "Заголовок без текста",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const DarkNormalOnlyText: Story = {
  args: {
    text: "Текст без заголовка",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const LightError: Story = {
  args: {
    title: "Я заголовок",
    text: "Я обычный текст",
    theme: TextTheme.ERROR,
  },
};

export const DarkError: Story = {
  args: {
    title: "Я заголовок",
    text: "Я обычный текст",
    theme: TextTheme.ERROR,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
