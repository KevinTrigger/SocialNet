import Portal from "./Portal";
import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "shared/const/theme";
import { Overlay } from "shared/ui/Overlay";

const meta: Meta<typeof Portal> = {
  title: "ui/Portal",
  component: Portal,
  args: {
    children: (
      <div>
        <Overlay onClick={close} />
        <div>TEST</div>
      </div>
    ),
  },
};

export default meta;

type Story = StoryObj<typeof Portal>;

export const Light: Story = {};
export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
