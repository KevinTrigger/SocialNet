import { RouterDecorator } from "shared/config/storybook/RouteDecorator/RouterDecorator";
import { Page } from "./Page";
import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof Page> = {
  title: "ui/Page",
  component: Page,
  decorators: [RouterDecorator],
};

export default meta;

type Story = StoryObj<typeof Page>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
