import { CheckIcon, ChevronDownIcon, ChevronRightIcon, DotFilledIcon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { Select } from '@janis.me/ui';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Select.Root> = {
  title: 'Components/Select',
  component: Select.Root,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  render: function Render(args) {
    return (
      <Select.Root {...args}>
        <Select.Trigger>
          <Select.Value placeholder="Select a fruit…" />
          <Select.Icon>
            <ChevronDownIcon />
          </Select.Icon>
        </Select.Trigger>

        <Select.Content>
          <Select.Item value="apple">
            <Select.ItemText>Apple</Select.ItemText>
            <Select.ItemIndicator>
              <CheckIcon />
            </Select.ItemIndicator>
          </Select.Item>
          <Select.Item value="banana">
            <Select.ItemText>Banana</Select.ItemText>
            <Select.ItemIndicator>
              <CheckIcon />
            </Select.ItemIndicator>
          </Select.Item>
        </Select.Content>
      </Select.Root>
    );
  },
};
