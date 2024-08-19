import type { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonSize, ButtonTheme } from "./Button";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof Button> = {
  title: "ui/Button",
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Text",
  },
};

export const Clear: Story = {
  args: {
    theme: ButtonTheme.CLEAR,
    children: "Text",
  },
};

export const Outline: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
    children: "Text",
  },
};

export const OutlineSizeL: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
    children: "Text",
  },
};

export const OutlineSizeXL: Story = {
  args: {
    size: ButtonSize.XL,
    theme: ButtonTheme.OUTLINE,
    children: "Text",
  },
};

export const OutlineDark: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
    children: "Text",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const BackgroundTheme: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND,
    children: "Text",
  },
};

export const BackgroundInverted: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    children: "Text",
  },
};

export const Square: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    children: ">",
  },
};

export const SquareSizeL: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
    children: ">",
  },
};

export const SquareSizeXL: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL,
    children: ">",
  },
};
