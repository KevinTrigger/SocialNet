import { [FTName] } from "./[FTName]";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof [FTName]> = {
  title: "ui/[FTName]",
  component: [FTName],
};

export default meta;

type Story = StoryObj<typeof [FTName]>;

export const Light: Story = {
  args: {},
};