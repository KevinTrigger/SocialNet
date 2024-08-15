import type { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonTheme } from "./Button";
import { fn } from "@storybook/test";
import 'app/styles/index.scss';
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";


const meta: Meta<typeof Button> = {
  title: 'ui/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
}

export default meta;

type Story = StoryObj<typeof Button>;

export const Clear: Story = {
  args: {
    theme: ButtonTheme.CLEAR,
    children: 'TestChildren'
  },
}

export const Secondary: Story = {
  args: {
    theme: ButtonTheme.SECONDARY,
    children: "TestChildrenSecondary"
  },
}

export const Outline: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
    children: "TestChildrenOutline"
  },
}

export const OutlineDark: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
    children: "TestChildrenOutline"
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}