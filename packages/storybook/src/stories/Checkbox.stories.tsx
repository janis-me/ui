import { CheckIcon } from '@radix-ui/react-icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { Checkbox, Label } from '@janis.me/ui';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Checkbox.Root> = {
  title: 'Components/Checkbox',
  component: Checkbox.Root,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onClick: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function Render(args) {
    return (
      <Checkbox.Root {...args}>
        <Checkbox.Indicator>
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>
    );
  },
};

export const WithLabel: Story = {
  render: function Render(args) {
    return (
      <>
        <Label.Root htmlFor="checkbox">Check me</Label.Root>

        <Checkbox.Root id="checkbox" {...args}>
          <Checkbox.Indicator>
            <CheckIcon />
          </Checkbox.Indicator>
        </Checkbox.Root>
      </>
    );
  },
};
