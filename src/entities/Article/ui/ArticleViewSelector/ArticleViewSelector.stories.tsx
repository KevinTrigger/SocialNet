import type { Meta, StoryObj } from "@storybook/react";
import { ArticleViewSelector } from "./ArticleViewSelector";
import { ArticleViewMode } from "../../model/types/article";
import { action } from "@storybook/addon-actions";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof ArticleViewSelector> = {
  title: "entities/Article/ArticleViewSelector",
  component: ArticleViewSelector,
};

export default meta;

type Story = StoryObj<typeof ArticleViewSelector>;

export const Light: Story = {
  args: {
    view: ArticleViewMode.SMALL,
    onViewClick: action("onViewClick"),
  },
};

export const Dark: Story = {
  args: {
    view: ArticleViewMode.SMALL,
    onViewClick: action("onViewClick"),
  },
  decorators: [
    ThemeDecorator(Theme.DARK)
  ]
};
