import AdminPanelPage from "./AdminPanelPage";
import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { RouterDecorator } from "../../../shared/config/storybook/RouteDecorator/RouterDecorator";
import { ThemeDecorator } from "../../../shared/config/storybook/ThemeDecorator/ThemeDecorator";

const meta: Meta<typeof AdminPanelPage> = {
  title: "pages/AdminPanelPage",
  component: AdminPanelPage,
  argTypes: {},
  decorators: [RouterDecorator],
};

export default meta;

type Story = StoryObj<typeof AdminPanelPage>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
