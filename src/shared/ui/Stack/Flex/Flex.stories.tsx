import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Flex } from "./Flex";

const children = (
  <>
    <div>test1</div>
    <div>test2</div>
    <div>test3</div>
  </>
);

const meta: Meta<typeof Flex> = {
  title: "ui/Flex",
  component: Flex,
};

export default meta;

type Story = StoryObj<typeof Flex>;

export const LightRow: Story = {
  args: {
    children,
    direction: "row",
    justify: "between",
  },
};

export const DarkRow: Story = {
  args: {
    children,
    direction: "row",
    justify: "between",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const LightColumn: Story = {
  args: {
    children,
    direction: "column",
    justify: "between",
  },
};

export const DarkColumn: Story = {
  args: {
    children,
    direction: "column",
    justify: "between",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const LightColumnGap32: Story = {
  args: {
    children,
    direction: "column",
    justify: "between",
    gap: "32",
  },
};

export const DarkColumnGap32: Story = {
  args: {
    children,
    direction: "column",
    justify: "between",
    gap: "32",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
