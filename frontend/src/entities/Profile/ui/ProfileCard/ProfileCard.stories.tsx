import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ProfileCard } from "./ProfileCard";
import { RouterDecorator } from "shared/config/storybook/RouteDecorator/RouterDecorator";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";

const meta: Meta<typeof ProfileCard> = {
  title: "entities/ProfileCard",
  component: ProfileCard,
  argTypes: {},
  decorators: [RouterDecorator],
};

export default meta;

type Story = StoryObj<typeof ProfileCard>;

export const Light: Story = {
  args: {},
};

export const LightWithError: Story = {
  args: {
    error: "error",
  },
};

export const LightWithReadonly: Story = {
  args: {
    readonly: true,
  },
};

export const LightIsLoading: Story = {
  args: {
    isLoading: true,
  },
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const DarkWithReadonly: Story = {
  args: {
    readonly: true,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const DarkWithError: Story = {
  args: {
    error: "error",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const DarkIsLoading: Story = {
  args: {
    isLoading: true,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
