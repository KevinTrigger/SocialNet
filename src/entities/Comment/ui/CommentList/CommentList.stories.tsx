import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { RouterDecorator } from "shared/config/storybook/RouteDecorator/RouterDecorator";
import { CommentList } from "./CommentList";

const commentsExample = [
  {
    id: "1",
    text: "Это мой комментарий",
    user: {
      id: "1",
      username: "Сова",
      avatar:
        "https://static.sobaka.ru/images/image/00/80/54/85/_normal.jpg?v=1485945088",
    },
  },
  {
    id: "2",
    text: "а это мой новый комментарий",
    user: {
      id: "1",
      username: "Сова",
      avatar:
        "https://static.sobaka.ru/images/image/00/80/54/85/_normal.jpg?v=1485945088",
    },
  },
  {
    id: "3",
    text: "это коммент другого юзера",
    user: {
      id: "2",
      username: "Пират",
      avatar:
        "https://sectricity.com/wp-content/uploads/2020/03/Ethical-Hacker-Sectricity.jpg",
    },
  },
];

const meta: Meta<typeof CommentList> = {
  title: "entities/Comment/CommentList",
  component: CommentList,
  args: {
    comments: commentsExample,
  },
  decorators: [RouterDecorator],
};

export default meta;

type Story = StoryObj<typeof CommentList>;

export const Light: Story = {};

export const LightIsLoading: Story = {
  args: {
    isLoading: true,
  },
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const DarkIsLoading: Story = {
  args: {
    isLoading: true,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
