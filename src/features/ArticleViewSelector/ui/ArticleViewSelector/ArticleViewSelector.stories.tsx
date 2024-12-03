import type { Meta, StoryObj } from "@storybook/react";
import { ArticleViewSelector } from "./ArticleViewSelector";
import { action } from "@storybook/addon-actions";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "shared/const/theme";
import { ArticleViewMode } from "entities/Article";

const meta: Meta<typeof ArticleViewSelector> = {
  title: "features/ArticleViewSelector",
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
  decorators: [ThemeDecorator(Theme.DARK)],
};
