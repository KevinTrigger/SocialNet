import type { Meta, StoryObj } from "@storybook/react";
import [FTName] from "./[FTName]";

const meta: Meta<typeof [FTName]> = {
  title: "widget/[FTName]",
  component: [FTName],
  argTypes: {
    backgroundColor: { control: "color" },
  },
  decorators: [],
};

export default meta;

type Story = StoryObj<typeof [FTName]>;

export const Light: Story = {};
