import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import CommentForm from "./CommentForm";
import { RouterDecorator } from "shared/config/storybook/RouteDecorator/RouterDecorator";
import { actions } from "@storybook/addon-actions";

const meta: Meta<typeof CommentForm> = {
  title: "features/CommentForm",
  component: CommentForm,
  argTypes: {},
  decorators: [RouterDecorator],
};

export default meta;

type Story = StoryObj<typeof CommentForm>;

export const Light: Story = {
  args: actions("onSendComment"),
  decorators: [
    StoreDecorator({
      addCommentForm: {
        text: "Текст комментария",
      },
    }),
  ],
};

export const Dark: Story = {
  args: actions("onSendComment"),
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      addCommentForm: {
        text: "Текст комментария",
      },
    }),
  ],
};
