import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "../../../shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "shared/const/theme";
import PageLoader from "./PageLoader";
import { RouterDecorator } from "../../../shared/config/storybook/RouteDecorator/RouterDecorator";

const meta: Meta<typeof PageLoader> = {
  title: "widget/PageLoader",
  component: PageLoader,
  argTypes: {},
  decorators: [RouterDecorator]
};

export default meta;

type Story = StoryObj<typeof PageLoader>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
