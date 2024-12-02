import { StarRating } from "./StarRating";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof StarRating> = {
  title: "ui/StarRating",
  component: StarRating,
};

export default meta;

type Story = StoryObj<typeof StarRating>;

export const Light: Story = {
  args: {
    
  },
};