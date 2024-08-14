// import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';
// import Button from './Button';

// const meta = {
//   title: 'ui/Button',
//   component: Button,
//   parameters: {

//     layout: 'centered',
//   },

//   tags: ['autodocs'],

//   args: { onClick: fn() },
// } satisfies Meta<typeof Button>;

// export default meta;

// type Story = StoryObj<typeof meta>;
// export const Primary: Story = {
//   args: {
//     children: 'primarytext'
//   },
// };

// export const Secondary: Story = {
//   args: {
//     children: 'secondtest'
//   },
// };


import type { Meta, StoryObj } from "@storybook/react";

import Button, { ButtonTheme } from "./Button";

const meta: Meta<typeof Button> = {
  component: Button
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