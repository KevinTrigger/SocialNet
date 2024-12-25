import { Button } from "shared/ui/deprecated/Button";
import { Dropdown } from "./Dropdown";
import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "shared/const/theme";

const meta: Meta<typeof Dropdown> = {
  title: "ui/Dropdown",
  component: Dropdown,
  args: {
    trigger: <Button children={"OPEN"} />,
    items: [
      {
        label: "Label1",
      },
      {
        label: "Label2",
        disabled: false,
      },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Light: Story = {};
export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
