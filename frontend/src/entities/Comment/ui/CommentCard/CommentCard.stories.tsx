import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { RouterDecorator } from "shared/config/storybook/RouteDecorator/RouterDecorator";
import { CommentCard } from "./CommentCard";

const commentData = {
  id: "1",
  text: "Это мой комментарий",
  user: {
    id: "1",
    username: "Мой ник",
    avatar: "https://static.sobaka.ru/images/image/00/80/54/85/_normal.jpg?v=1485945088",
  },
};

const meta: Meta<typeof CommentCard> = {
  title: "entities/Comment/CommentCard",
  component: CommentCard,
  decorators: [RouterDecorator],
};

export default meta;

type Story = StoryObj<typeof CommentCard>;

export const Light: Story = {
  args: {
    comment: commentData
  },
};

export const LightIsLoading: Story = {
  args: {
    comment: commentData,
    isLoading: true
  },
};

export const Dark: Story = {
  args: {
    comment: commentData
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const DarkIsLoading: Story = {
  args: {
    comment: commentData,
    isLoading: true
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
