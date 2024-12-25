import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "../../../config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "shared/const/theme";
import { AppLink, AppLinkTheme } from "./AppLink";
import { RouterDecorator } from "../../../config/storybook/RouteDecorator/RouterDecorator";

const meta: Meta<typeof AppLink> = {
  title: "ui/AppLink",
  component: AppLink,
  args: {
    to: "/",
  },
  decorators: [RouterDecorator],
};

export default meta;

type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
  args: {
    children: "text",
    theme: AppLinkTheme.PRIMARY,
  },
};

export const Secondary: Story = {
  args: {
    children: "text",
    theme: AppLinkTheme.SECONDARY,
  },
};

export const PrimaryDark: Story = {
  args: {
    children: "text",
    theme: AppLinkTheme.PRIMARY,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const SecondaryDark: Story = {
  args: {
    children: "text",
    theme: AppLinkTheme.SECONDARY,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
