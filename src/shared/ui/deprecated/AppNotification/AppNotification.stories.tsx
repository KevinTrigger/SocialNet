import { AppNotification } from "./AppNotification";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof AppNotification> = {
  title: "ui/AppNotification",
  component: AppNotification,
};

export default meta;

type Story = StoryObj<typeof AppNotification>;

export const Light: Story = {
  args: {},
};