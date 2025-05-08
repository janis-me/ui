import { CheckIcon, ChevronRightIcon, DotFilledIcon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { Button, DropdownMenu } from '@janis.me/ui';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof DropdownMenu.Root> = {
  title: 'Components/DropdownMenu',
  component: DropdownMenu.Root,
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
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <Button.Root secondary round>
            <HamburgerMenuIcon />
          </Button.Root>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content>
          <DropdownMenu.Item>
            New Tab <div>⌘+T</div>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            New Window <div>⌘+N</div>
          </DropdownMenu.Item>
          <DropdownMenu.Item disabled>
            New Private Window <div>⇧+⌘+N</div>
          </DropdownMenu.Item>
          <DropdownMenu.Arrow />
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    );
  },
};

export const SimpleWithPortal: Story = {
  render: function Render(args) {
    return (
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <Button.Root secondary round>
            <HamburgerMenuIcon />
          </Button.Root>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content>
            <DropdownMenu.Item>
              New Tab <div>⌘+T</div>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              New Window <div>⌘+N</div>
            </DropdownMenu.Item>
            <DropdownMenu.Item disabled>
              New Private Window <div>⇧+⌘+N</div>
            </DropdownMenu.Item>
            <DropdownMenu.Arrow />
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    );
  },
};

export const NoArrow: Story = {
  render: function Render(args) {
    return (
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <Button.Root secondary round>
            <HamburgerMenuIcon />
          </Button.Root>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content>
            <DropdownMenu.Item>
              New Tab <div>⌘+T</div>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              New Window <div>⌘+N</div>
            </DropdownMenu.Item>
            <DropdownMenu.Item disabled>
              New Private Window <div>⇧+⌘+N</div>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    );
  },
};

export const Submenu: Story = {
  render: function Render(args) {
    return (
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <Button.Root secondary round>
            <HamburgerMenuIcon />
          </Button.Root>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content>
            <DropdownMenu.Item>
              New Tab <div>⌘+T</div>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              New Window <div>⌘+N</div>
            </DropdownMenu.Item>
            <DropdownMenu.Item disabled>
              New Private Window <div>⇧+⌘+N</div>
            </DropdownMenu.Item>
            <DropdownMenu.Sub>
              <DropdownMenu.SubTrigger>
                More Tools
                <div>
                  <ChevronRightIcon />
                </div>
              </DropdownMenu.SubTrigger>
              <DropdownMenu.Portal>
                <DropdownMenu.SubContent>
                  <DropdownMenu.Item>
                    Save Page As… <div>⌘+S</div>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item>Create Shortcut…</DropdownMenu.Item>
                  <DropdownMenu.Item>Name Window…</DropdownMenu.Item>
                  <DropdownMenu.Separator />
                  <DropdownMenu.Item>Developer Tools</DropdownMenu.Item>
                </DropdownMenu.SubContent>
              </DropdownMenu.Portal>
            </DropdownMenu.Sub>

            <DropdownMenu.Arrow />
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    );
  },
};

export const ItemGroups: Story = {
  render: function Render(args) {
    const [bookmarksChecked, setBookmarksChecked] = useState(true);
    const [urlsChecked, setUrlsChecked] = useState(false);
    const [person, setPerson] = useState('pedro');

    return (
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <Button.Root secondary round>
            <HamburgerMenuIcon />
          </Button.Root>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content>
            <DropdownMenu.CheckboxItem checked={bookmarksChecked} onCheckedChange={setBookmarksChecked}>
              <DropdownMenu.ItemIndicator>
                <CheckIcon />
              </DropdownMenu.ItemIndicator>
              Show Bookmarks <div>⌘+B</div>
            </DropdownMenu.CheckboxItem>
            <DropdownMenu.CheckboxItem checked={urlsChecked} onCheckedChange={setUrlsChecked}>
              <DropdownMenu.ItemIndicator>
                <CheckIcon />
              </DropdownMenu.ItemIndicator>
              Show Full URLs
            </DropdownMenu.CheckboxItem>

            <DropdownMenu.Separator />

            <DropdownMenu.Label>People</DropdownMenu.Label>
            <DropdownMenu.RadioGroup value={person} onValueChange={setPerson}>
              <DropdownMenu.RadioItem value="pedro">
                <DropdownMenu.ItemIndicator>
                  <DotFilledIcon />
                </DropdownMenu.ItemIndicator>
                Pedro Duarte
              </DropdownMenu.RadioItem>
              <DropdownMenu.RadioItem value="colm">
                <DropdownMenu.ItemIndicator>
                  <DotFilledIcon />
                </DropdownMenu.ItemIndicator>
                Colm Tuite
              </DropdownMenu.RadioItem>
            </DropdownMenu.RadioGroup>

            <DropdownMenu.Arrow />
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    );
  },
};
