import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "../../../shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import Navbar from "./Navbar";
import { RouterDecorator } from "../../../shared/config/storybook/RouteDecorator/RouterDecorator";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";

const meta: Meta<typeof Navbar> = {
  title: "widget/Navbar",
  component: Navbar,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  decorators: [
    RouterDecorator,
    StoreDecorator({
      loginForm: { username: "username", password: "123" },
    }),
  ],
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
  args: {},
};

export const LightAuthtorized: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      user: { authData: { id: "1", username: "admin" } },
    }),
  ],
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const DarkAuthtorized: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      user: { authData: { id: "1", username: "admin" } },
    }),
    ThemeDecorator(Theme.DARK),
  ],
};
