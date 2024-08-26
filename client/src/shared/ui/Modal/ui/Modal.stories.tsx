import type { Meta, StoryObj } from "@storybook/react";
import { RouterDecorator } from "../../../config/storybook/RouteDecorator/RouterDecorator";
import Modal from "./Modal";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const childElem = (
  <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, soluta molestias, in ipsum eum aperiam sapiente architecto consequatur blanditiis rerum, quae omnis! Tenetur, eveniet rerum!</div>
);

const meta: Meta<typeof Modal> = {
  title: "ui/Modal",
  component: Modal,
  argTypes: {},
  decorators: [RouterDecorator]
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Light: Story = {
  args: {
    children: childElem,
    isOpen: true,
  },
};

export const Dark: Story = {
  args: {
    children: childElem,
    isOpen: true,
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};