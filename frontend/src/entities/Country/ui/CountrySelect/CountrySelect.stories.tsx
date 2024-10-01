import type { Meta, StoryObj } from "@storybook/react";
import { CountrySelect } from "./CountrySelect";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";

const meta: Meta<typeof CountrySelect> = {
  title: "entities/CountrySelect",
  component: CountrySelect,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof CountrySelect>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
