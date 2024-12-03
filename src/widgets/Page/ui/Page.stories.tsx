import { RouterDecorator } from "shared/config/storybook/RouteDecorator/RouterDecorator";
import { Page } from "./Page";
import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "shared/const/theme";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";

const meta: Meta<typeof Page> = {
  title: "widget/Page",
  component: Page,
  decorators: [RouterDecorator, StoreDecorator({})],
  args: {
    children: "Example widget Page (wrapper on Pages)",
  },
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
