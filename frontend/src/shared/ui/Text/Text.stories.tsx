import type { Meta, StoryObj } from "@storybook/react";
import { Text, TextSize, TextTheme } from "./Text";
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

export const LightError: Story = {
  args: {
    title: "Я заголовок",
    text: "Я обычный текст",
    theme: TextTheme.ERROR,
  },
};

export const LightSizeM: Story = {
  args: {
    title: "Я заголовок",
    text: "Я обычный текст",
    size: TextSize.M,
  },
};

export const LightSizeL: Story = {
  args: {
    title: "Я заголовок",
    text: "Я обычный текст",
    size: TextSize.L,
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

export const DarkError: Story = {
  args: {
    title: "Я заголовок",
    text: "Я обычный текст",
    theme: TextTheme.ERROR,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const DarkSizeM: Story = {
  args: {
    title: "Я заголовок",
    text: "Я обычный текст",
    size: TextSize.M,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const DarkSizeL: Story = {
  args: {
    title: "Я заголовок",
    text: "Я обычный текст",
    size: TextSize.L,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
