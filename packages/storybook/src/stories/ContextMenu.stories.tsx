import { CheckIcon, ChevronRightIcon, DotFilledIcon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { Button, ContextMenu } from '@janis.me/ui';

import './ContextMenu.stories.scss';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof ContextMenu.Root> = {
  title: 'Components/ContextMenu',
  component: ContextMenu.Root,
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
      <ContextMenu.Root>
        <ContextMenu.Trigger asChild>
          <div className="context-menu-story__trigger">Right-click me</div>
        </ContextMenu.Trigger>

        <ContextMenu.Content>
          <ContextMenu.Item>
            New Tab <div>⌘+T</div>
          </ContextMenu.Item>
          <ContextMenu.Item>
            New Window <div>⌘+N</div>
          </ContextMenu.Item>
          <ContextMenu.Item disabled>
            New Private Window <div>⇧+⌘+N</div>
          </ContextMenu.Item>
        </ContextMenu.Content>
      </ContextMenu.Root>
    );
  },
};

export const SimpleWithPortal: Story = {
  render: function Render(args) {
    return (
      <ContextMenu.Root>
        <ContextMenu.Trigger asChild>
          <div className="context-menu-story__trigger">Right-click me</div>
        </ContextMenu.Trigger>

        <ContextMenu.Portal>
          <ContextMenu.Content>
            <ContextMenu.Item>
              New Tab <div>⌘+T</div>
            </ContextMenu.Item>
            <ContextMenu.Item>
              New Window <div>⌘+N</div>
            </ContextMenu.Item>
            <ContextMenu.Item disabled>
              New Private Window <div>⇧+⌘+N</div>
            </ContextMenu.Item>
          </ContextMenu.Content>
        </ContextMenu.Portal>
      </ContextMenu.Root>
    );
  },
};

export const Submenu: Story = {
  render: function Render(args) {
    return (
      <ContextMenu.Root>
        <ContextMenu.Trigger asChild>
          <div className="context-menu-story__trigger">Right-click me</div>
        </ContextMenu.Trigger>

        <ContextMenu.Portal>
          <ContextMenu.Content>
            <ContextMenu.Item>
              New Tab <div>⌘+T</div>
            </ContextMenu.Item>
            <ContextMenu.Item>
              New Window <div>⌘+N</div>
            </ContextMenu.Item>
            <ContextMenu.Item disabled>
              New Private Window <div>⇧+⌘+N</div>
            </ContextMenu.Item>
            <ContextMenu.Sub>
              <ContextMenu.SubTrigger>
                More Tools
                <div>
                  <ChevronRightIcon />
                </div>
              </ContextMenu.SubTrigger>
              <ContextMenu.Portal>
                <ContextMenu.SubContent>
                  <ContextMenu.Item>
                    Save Page As… <div>⌘+S</div>
                  </ContextMenu.Item>
                  <ContextMenu.Item>Create Shortcut…</ContextMenu.Item>
                  <ContextMenu.Item>Name Window…</ContextMenu.Item>
                  <ContextMenu.Separator />
                  <ContextMenu.Item>Developer Tools</ContextMenu.Item>
                </ContextMenu.SubContent>
              </ContextMenu.Portal>
            </ContextMenu.Sub>
          </ContextMenu.Content>
        </ContextMenu.Portal>
      </ContextMenu.Root>
    );
  },
};

export const ItemGroups: Story = {
  render: function Render(args) {
    const [bookmarksChecked, setBookmarksChecked] = useState(true);
    const [urlsChecked, setUrlsChecked] = useState(false);
    const [person, setPerson] = useState('pedro');

    return (
      <ContextMenu.Root>
        <ContextMenu.Trigger asChild>
          <div className="context-menu-story__trigger">Right-click me</div>
        </ContextMenu.Trigger>

        <ContextMenu.Portal>
          <ContextMenu.Content>
            <ContextMenu.CheckboxItem checked={bookmarksChecked} onCheckedChange={setBookmarksChecked}>
              <ContextMenu.ItemIndicator>
                <CheckIcon />
              </ContextMenu.ItemIndicator>
              Show Bookmarks <div>⌘+B</div>
            </ContextMenu.CheckboxItem>
            <ContextMenu.CheckboxItem checked={urlsChecked} onCheckedChange={setUrlsChecked}>
              <ContextMenu.ItemIndicator>
                <CheckIcon />
              </ContextMenu.ItemIndicator>
              Show Full URLs
            </ContextMenu.CheckboxItem>

            <ContextMenu.Separator />

            <ContextMenu.Label>People</ContextMenu.Label>
            <ContextMenu.RadioGroup value={person} onValueChange={setPerson}>
              <ContextMenu.RadioItem value="pedro">
                <ContextMenu.ItemIndicator>
                  <DotFilledIcon />
                </ContextMenu.ItemIndicator>
                Pedro Duarte
              </ContextMenu.RadioItem>
              <ContextMenu.RadioItem value="colm">
                <ContextMenu.ItemIndicator>
                  <DotFilledIcon />
                </ContextMenu.ItemIndicator>
                Colm Tuite
              </ContextMenu.RadioItem>
            </ContextMenu.RadioGroup>
          </ContextMenu.Content>
        </ContextMenu.Portal>
      </ContextMenu.Root>
    );
  },
};
