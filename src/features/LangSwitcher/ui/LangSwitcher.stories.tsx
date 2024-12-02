import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "shared/const/theme";
import LangSwitcher from "./LangSwitcher";
import { RouterDecorator } from "shared/config/storybook/RouteDecorator/RouterDecorator";

const meta: Meta<typeof LangSwitcher> = {
  title: "ui/LangSwitcher",
  component: LangSwitcher,
  decorators: [RouterDecorator]
};

export default meta;

type Story = StoryObj<typeof LangSwitcher>;

export const Light: Story = {
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)]
};