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
      <Select.Root {...args}>
        <Select.Trigger>
          <Select.Value placeholder="Select a fruit…" />
          <Select.Icon>
            <ChevronDownIcon />
          </Select.Icon>
        </Select.Trigger>

        <Select.Content position="popper">
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

export const WithPortal: Story = {
  render: function Render(args) {
    return (
      <Select.Root {...args}>
        <Select.Trigger>
          <Select.Value placeholder="Select a fruit…" />
          <Select.Icon>
            <ChevronDownIcon />
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content position="popper">
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
        </Select.Portal>
      </Select.Root>
    );
  },
};

export const ExplicitPositioning: Story = {
  render: function Render(args) {
    return (
      <Select.Root {...args}>
        <Select.Trigger>
          <Select.Value placeholder="Select a fruit…" />
          <Select.Icon>
            <ChevronDownIcon />
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content position="popper" side="right">
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
        </Select.Portal>
      </Select.Root>
    );
  },
};

export const WithGroups: Story = {
  render: function Render(args) {
    return (
      <Select.Root {...args}>
        <Select.Trigger>
          <Select.Value placeholder="Select a fruit…" />
          <Select.Icon>
            <ChevronDownIcon />
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content position="popper" side="right">
            <Select.Group>
              <Select.Label>Fruit</Select.Label>
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
            </Select.Group>
            <Select.Separator />
            <Select.Group>
              <Select.Label>Candy</Select.Label>
              <Select.Item value="chocolate">
                <Select.ItemText>Chocolate</Select.ItemText>
                <Select.ItemIndicator>
                  <CheckIcon />
                </Select.ItemIndicator>
              </Select.Item>
              <Select.Item value="gummy">
                <Select.ItemText>Gummy</Select.ItemText>
                <Select.ItemIndicator>
                  <CheckIcon />
                </Select.ItemIndicator>
              </Select.Item>
            </Select.Group>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    );
  },
};
