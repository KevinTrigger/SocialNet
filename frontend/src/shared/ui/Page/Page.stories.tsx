import { Page } from "./Page";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Page> = {
  title: "ui/Page",
  component: Page,
};

export default meta;

type Story = StoryObj<typeof Page>;

export const Light: Story = {
  args: {},
};