import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "shared/const/theme";
import { Avatar, AvatarSize } from "./Avatar";
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

export const Light_SIZE_XS: Story = {
  args: {
    src: Image,
    size: AvatarSize.XS,
  },
};

export const Light_SIZE_S: Story = {
  args: {
    src: Image,
    size: AvatarSize.S,
  },
};

export const Light_SIZE_M: Story = {
  args: {
    src: Image,
    size: AvatarSize.M,
  },
};

export const Light_SIZE_L: Story = {
  args: {
    src: Image,
    size: AvatarSize.L,
  },
};

export const Light_SIZE_XL: Story = {
  args: {
    src: Image,
    size: AvatarSize.XL,
  },
};

export const Dark: Story = {
  args: {
    src: Image,
    size: AvatarSize.XL,
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
