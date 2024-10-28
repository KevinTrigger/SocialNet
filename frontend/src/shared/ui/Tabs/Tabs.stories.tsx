import { Tabs } from "./Tabs";
import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const tabs = [
  {
    content: "its my content",
    value: "its value",
  },
  {
    content: "its my 2 content",
    value: "its value 2",
  },
  {
    content: "its my 3 content",
    value: "its value 3",
  },
];

const meta: Meta<typeof Tabs> = {
  title: "ui/Tabs",
  component: Tabs,
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Light: Story = {
  args: {
    tabs,
    onTabClick: action("onTabClick"),
  },
};

export const Dark: Story = {
  args: {
    tabs,
    onTabClick: action("onTabClick"),
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};
