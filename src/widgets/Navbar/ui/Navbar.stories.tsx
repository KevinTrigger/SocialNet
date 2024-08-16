import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "../../../shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import Navbar from "./Navbar";
import { RouterDecorator } from "../../../shared/config/storybook/RouteDecorator/RouterDecorator";

const meta: Meta<typeof Navbar> = {
  title: "widget/Navbar",
  component: Navbar,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  decorators: [RouterDecorator]
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
