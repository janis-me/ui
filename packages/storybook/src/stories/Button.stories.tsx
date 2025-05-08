import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { Button } from '@janis.me/ui';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Button',
  component: Button.Root,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    primary: {
      control: { type: 'boolean' },
      description: 'Primary button',
    },
    secondary: {
      control: { type: 'boolean' },
      description: 'Secondary button',
    },
    error: {
      control: { type: 'boolean' },
      description: 'Error button',
    },
    round: {
      control: { type: 'boolean' },
      description: 'Round button',
    },
    small: {
      control: { type: 'boolean' },
      description: 'Small button',
    },
    large: {
      control: { type: 'boolean' },
      description: 'Large button',
    },
  },
  args: { onClick: fn(), children: 'Button' },
} satisfies Meta<typeof Button.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};
export const Secondary: Story = {
  args: {
    secondary: true,
  },
};
export const Error: Story = {
  args: {
    error: true,
  },
};
export const Round: Story = {
  args: {
    round: true,
    secondary: true,
    children: <HamburgerMenuIcon />,
  },
};
export const RoundSmall: Story = {
  args: {
    round: true,
    small: true,
    secondary: true,
    children: <HamburgerMenuIcon />,
  },
};
export const RoundLarge: Story = {
  args: {
    round: true,
    large: true,
    secondary: true,
    children: <HamburgerMenuIcon />,
  },
};
export const Small: Story = {
  args: {
    small: true,
  },
};
export const Large: Story = {
  args: {
    large: true,
  },
};
