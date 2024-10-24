import { ArticlesPageFilters } from "./ArticlesPageFilters";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ArticlesPageFilters> = {
  title: "ui/ArticlesPageFilters",
  component: ArticlesPageFilters,
};

export default meta;

type Story = StoryObj<typeof ArticlesPageFilters>;

export const Light: Story = {
  args: {},
};