import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import LoginForm from "./LoginForm";

const meta: Meta<typeof LoginForm> = {
  title: "features/LoginForm",
  component: LoginForm,
  argTypes: {},
  decorators: [
    StoreDecorator({
      loginForm: {
        username: "admin",
        password: "123",
      },
    }),
  ],
};

export default meta;

type Story = StoryObj<typeof LoginForm>;

export const Light: Story = {};

export const LightWithError: Story = {
  decorators: [
    StoreDecorator({
      loginForm: {
        username: "admin",
        password: "123",
        error: "Неверная комбинация логина и пароля",
      },
    }),
  ],
};

export const LightWithLoading: Story = {
  decorators: [
    StoreDecorator({
      loginForm: {
        username: "admin",
        password: "123",
        isLoading: true,
      },
    }),
  ],
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const DarkWithError: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      loginForm: {
        username: "admin",
        password: "123",
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
        username: "admin",
        password: "123",
        isLoading: true,
      },
    }),
  ],
};
