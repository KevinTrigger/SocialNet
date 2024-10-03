import type { Meta, StoryObj } from "@storybook/react";
import { CurrencySelect } from "./CurrencySelect";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";

const meta: Meta<typeof CurrencySelect> = {
  title: "entities/CurrencySelect",
  component: CurrencySelect,
};

export default meta;

type Story = StoryObj<typeof CurrencySelect>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
