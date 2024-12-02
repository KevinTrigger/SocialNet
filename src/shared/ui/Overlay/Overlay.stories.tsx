import { Overlay } from "./Overlay";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Overlay> = {
  title: "ui/Overlay",
  component: Overlay,
};

export default meta;

type Story = StoryObj<typeof Overlay>;

export const Light: Story = {
  args: {},
};