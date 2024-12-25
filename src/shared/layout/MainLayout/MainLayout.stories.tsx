import { MainLayout } from "./MainLayout";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof MainLayout> = {
  title: "ui/MainLayout",
  component: MainLayout,
};

export default meta;

type Story = StoryObj<typeof MainLayout>;

export const Light: Story = {
  args: {},
};