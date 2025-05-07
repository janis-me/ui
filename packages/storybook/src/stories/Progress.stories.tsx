import type { Meta, StoryObj } from '@storybook/react-vite';
import { useEffect, useState } from 'react';

import { Progress } from '@janis.me/ui';

import './Progress.stories.scss';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Progress.Root> = {
  title: 'Components/Progress',
  component: Progress.Root,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  render: args => {
    const [progress, setProgress] = useState(13);

    useEffect(() => {
      const timer = window.setInterval(() => {
        const newProgress = Math.floor(Math.random() * 100);
        setProgress(newProgress);
      }, 2_000);

      return () => window.clearInterval(timer);
    }, []);

    return (
      <Progress.Root {...args} value={progress} className="progress-story__root">
        <Progress.Indicator style={{ transform: `translateX(-${100 - progress}%)` }} />
      </Progress.Root>
    );
  },
};

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

export const Info: Story = {
  args: {
    info: true,
  },
};

export const Success: Story = {
  args: {
    success: true,
  },
};

export const Warning: Story = {
  args: {
    warning: true,
  },
};

export const Error: Story = {
  args: {
    error: true,
  },
};
