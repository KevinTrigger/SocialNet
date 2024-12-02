import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "shared/const/theme";
import NotFoundPage from "./NotFoundPage";
import { RouterDecorator } from "../../../shared/config/storybook/RouteDecorator/RouterDecorator";
import { ThemeDecorator } from "../../../shared/config/storybook/ThemeDecorator/ThemeDecorator";

const meta: Meta<typeof NotFoundPage> = {
  title: "pages/NotFoundPage",
  component: NotFoundPage,
  argTypes: {},
  decorators: [RouterDecorator]
};

export default meta;

type Story = StoryObj<typeof NotFoundPage>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)]
};