import { Popup } from "./Popup";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Popup> = {
  title: "ui/Popup",
  component: Popup,
};

export default meta;

type Story = StoryObj<typeof Popup>;

export const Light: Story = {
  args: {},
};