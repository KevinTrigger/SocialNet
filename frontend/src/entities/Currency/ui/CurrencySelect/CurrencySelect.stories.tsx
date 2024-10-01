import type { Meta, StoryObj } from "@storybook/react";
import { CurrencySelect } from "./CurrencySelect";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";

const meta: Meta<typeof CurrencySelect> = {
  title: "entities/CurrencySelect",
  component: CurrencySelect,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof CurrencySelect>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
