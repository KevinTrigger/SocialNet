import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import LoginForm from "./LoginForm";
import { RouterDecorator } from "shared/config/storybook/RouteDecorator/RouterDecorator";

const meta: Meta<typeof LoginForm> = {
  title: "features/LoginForm",
  component: LoginForm,
  argTypes: {},
  decorators: [RouterDecorator],
};

export default meta;

type Story = StoryObj<typeof LoginForm>;

export const Light: Story = {
  decorators: [
    StoreDecorator({
      loginForm: {
        username: "Username",
        password: "Password123",
      },
    }),
  ],
};

export const LightWithError: Story = {
  decorators: [
    StoreDecorator({
      loginForm: {
        username: "Username",
        password: "Password123",
        error: "Неверная комбинация логина и пароля",
      },
    }),
  ],
};

export const LightWithLoading: Story = {
  decorators: [
    StoreDecorator({
      loginForm: {
        username: "Username",
        password: "Password123",
        isLoading: true,
      },
    }),
  ],
};

export const Dark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      loginForm: {
        username: "Username",
        password: "Password123",
      },
    }),
  ],
};

export const DarkWithError: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      loginForm: {
        error: "Неверная комбинация логина и пароля",
      },
    }),
  ],
};

export const DarkWithLoading: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      loginForm: {
        isLoading: true,
      },
    }),
  ],
};
