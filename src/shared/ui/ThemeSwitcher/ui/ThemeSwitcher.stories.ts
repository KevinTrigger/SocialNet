import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import ThemeSwitcher from './ThemeSwitcher';

const meta = {
  title: 'ui/ThemeSwitcher',
  component: ThemeSwitcher,
  parameters: {

    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    backgroundColor: { control: 'color' },
  },

  args: { onClick: fn() },
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    primary: true,
    label: 'ThemeSwitcher',
  },
};

export const Secondary: Story = {
  args: {
    label: 'ThemeSwitcher',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'ThemeSwitcher',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'ThemeSwitcher',
  },
};

export const TestStory: Story = {
  args: {
    primary: false,
    label: "ThemeSwitcher"
  }
};
