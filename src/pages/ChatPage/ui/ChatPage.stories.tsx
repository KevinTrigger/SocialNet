import ChatPage from "./ChatPage";
import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "shared/const/theme";
import { RouterDecorator } from "../../../shared/config/storybook/RouteDecorator/RouterDecorator";
import { ThemeDecorator } from "../../../shared/config/storybook/ThemeDecorator/ThemeDecorator";

const meta: Meta<typeof ChatPage> = {
  title: "pages/ChatPage",
  component: ChatPage,
  argTypes: {},
  decorators: [RouterDecorator],
};

export default meta;

type Story = StoryObj<typeof ChatPage>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
