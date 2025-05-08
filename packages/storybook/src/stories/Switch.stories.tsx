import type { Meta, StoryObj } from '@storybook/react-vite';

import { Label, Switch } from '@janis.me/ui';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Switch.Root> = {
  title: 'Components/Switch',
  component: Switch.Root,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div style={{ width: '200px' }}>
        <Story />
      </div>
    ),
  ],
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  render: function Render(args) {
    return (
      <>
        <Label.Root htmlFor="switch-1">Dark mode</Label.Root>
        <Switch.Root id="switch-1" {...args}>
          <Switch.Thumb />
        </Switch.Root>
      </>
    );
  },
};
