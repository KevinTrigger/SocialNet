import type { Meta, StoryObj } from "@storybook/react";
import { RouterDecorator } from "../../../config/storybook/RouteDecorator/RouterDecorator";
import Loader from "./Loader";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof Loader> = {
  title: "ui/Loader",
  component: Loader,
  argTypes: {},
  decorators: [RouterDecorator]
};

export default meta;

type Story = StoryObj<typeof Loader>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)]
};