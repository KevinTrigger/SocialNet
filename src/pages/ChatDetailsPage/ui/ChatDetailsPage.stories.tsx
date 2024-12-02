import ChatDetailsPage from "./ChatDetailsPage";
import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "shared/const/theme";
import { RouterDecorator } from "../../../shared/config/storybook/RouteDecorator/RouterDecorator";
import { ThemeDecorator } from "../../../shared/config/storybook/ThemeDecorator/ThemeDecorator";

const meta: Meta<typeof ChatDetailsPage> = {
  title: "pages/ChatDetailsPage",
  component: ChatDetailsPage,
  argTypes: {},
  decorators: [RouterDecorator],
};

export default meta;

type Story = StoryObj<typeof ChatDetailsPage>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
