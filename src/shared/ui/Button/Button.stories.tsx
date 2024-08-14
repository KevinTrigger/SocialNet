import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonTheme } from "./Button";
import { fn } from "@storybook/test";
import 'app/styles/index.scss';

const meta: Meta<typeof Button> = {
  title: 'ui/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
}

export default meta;

type Story = StoryObj<typeof Button>;

export const Clear: Story = {
  args: {
    theme: ButtonTheme.CLEAR,
    children: 'TestChildren'
  }
}

export const Secondary: Story = {
  args: {
    theme: ButtonTheme.SECONDARY,
    children: "TestChildrenSecondary"
  }
}

export const Outline: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
    children: "TestChildrenOutline"
  },
  // decorators: [(Story) => (
  //   <div style={{padding: '200px', backgroundColor: '#000'}}><Story /></div>
  // )]
}