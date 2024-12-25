import { AppImage } from "./AppImage";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof AppImage> = {
  title: "ui/AppImage",
  component: AppImage,
};

export default meta;

type Story = StoryObj<typeof AppImage>;

export const Light: Story = {
  args: {},
};