import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "../../../shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import PageError from "./PageError";
import { RouterDecorator } from "../../../shared/config/storybook/RouteDecorator/RouterDecorator";

const meta: Meta<typeof PageError> = {
  title: "widget/PageError",
  component: PageError,
  argTypes: {},
  decorators: [RouterDecorator],
};

export default meta;

type Story = StoryObj<typeof PageError>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
