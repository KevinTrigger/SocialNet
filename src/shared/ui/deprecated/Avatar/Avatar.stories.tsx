import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "shared/const/theme";
import { Avatar } from "./Avatar";
import Image from "shared/assets/tests/storybook.png";

const meta: Meta<typeof Avatar> = {
  title: "ui/Avatar",
  component: Avatar,
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Light: Story = {
  args: {
    src: Image,
  },
};

export const LightWithAlt: Story = {
  args: {
    src: "test",
    alt: "Alternative text",
  },
};

export const LightRounded: Story = {
  args: {
    src: Image,
    rounded: true,
  },
};

export const LightCustomSize: Story = {
  args: {
    src: Image,
    size: 250,
  },
};

export const Dark: Story = {
  args: {
    src: Image,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const DarkWithAlt: Story = {
  args: {
    src: "test",
    alt: "Alternative text",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const DarkRounded: Story = {
  args: {
    src: Image,
    rounded: true,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const DarkCustomSize: Story = {
  args: {
    src: Image,
    size: 250,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
