import type { Meta, StoryObj } from "@storybook/react";
import { CountrySelect } from "./CountrySelect";
import { Theme } from "shared/const/theme";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";

const meta: Meta<typeof CountrySelect> = {
  title: "entities/CountrySelect",
  component: CountrySelect,
};

export default meta;

type Story = StoryObj<typeof CountrySelect>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
