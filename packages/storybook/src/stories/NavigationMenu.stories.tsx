import { TriangleLeftIcon, TriangleUpIcon } from '@radix-ui/react-icons';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { NavigationMenu } from '@janis.me/ui';

import './NavigationMenu.stories.scss';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof NavigationMenu.Root> = {
  title: 'Components/NavigationMenu',
  component: NavigationMenu.Root,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function Render(args) {
    return (
      <NavigationMenu.Root {...args}>
        <NavigationMenu.List>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger>Item one</NavigationMenu.Trigger>
            <NavigationMenu.Content>Item one content</NavigationMenu.Content>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger>Item two</NavigationMenu.Trigger>
            <NavigationMenu.Content>Item Two content</NavigationMenu.Content>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    );
  },
  args: {},
};

export const SubMenu: Story = {
  render: function Render(args) {
    return (
      <NavigationMenu.Root {...args}>
        <NavigationMenu.List>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger>Item one</NavigationMenu.Trigger>
            <NavigationMenu.Content>Item one content</NavigationMenu.Content>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger>Item two</NavigationMenu.Trigger>
            <NavigationMenu.Content>
              <NavigationMenu.Sub defaultValue="sub1">
                <NavigationMenu.List>
                  <NavigationMenu.Item value="sub1">
                    <NavigationMenu.Trigger>Sub item one</NavigationMenu.Trigger>
                    <NavigationMenu.Content>Sub item one content</NavigationMenu.Content>
                  </NavigationMenu.Item>
                  <NavigationMenu.Item value="sub2">
                    <NavigationMenu.Trigger>Sub item two</NavigationMenu.Trigger>
                    <NavigationMenu.Content>Sub item two content</NavigationMenu.Content>
                  </NavigationMenu.Item>
                </NavigationMenu.List>
              </NavigationMenu.Sub>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    );
  },
  args: {},
};

export const Vertical: Story = {
  render: function Render(args) {
    return (
      <NavigationMenu.Root {...args}>
        <NavigationMenu.List>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger>Item one</NavigationMenu.Trigger>
            <NavigationMenu.Content>Item one content</NavigationMenu.Content>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger>Item two</NavigationMenu.Trigger>
            <NavigationMenu.Content>Item Two content</NavigationMenu.Content>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    );
  },
  args: {
    orientation: 'vertical',
  },
};

export const Horizontal: Story = {
  render: function Render(args) {
    return (
      <NavigationMenu.Root {...args}>
        <NavigationMenu.List>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger>Item one</NavigationMenu.Trigger>
            <NavigationMenu.Content>Item one content</NavigationMenu.Content>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger>Item two</NavigationMenu.Trigger>
            <NavigationMenu.Content>Item Two content</NavigationMenu.Content>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    );
  },
  args: {
    orientation: 'horizontal',
  },
};

export const WithIndicator: Story = {
  render: function Render(args) {
    return (
      <NavigationMenu.Root {...args}>
        <NavigationMenu.List>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger>Item one</NavigationMenu.Trigger>
            <NavigationMenu.Content>Item one content</NavigationMenu.Content>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger>Item two</NavigationMenu.Trigger>
            <NavigationMenu.Content>Item Two content</NavigationMenu.Content>
          </NavigationMenu.Item>
          <NavigationMenu.Indicator />
        </NavigationMenu.List>
      </NavigationMenu.Root>
    );
  },
  args: {},
};

export const VerticalWithIndicator: Story = {
  render: function Render(args) {
    return (
      <NavigationMenu.Root {...args}>
        <NavigationMenu.List>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger>Item one</NavigationMenu.Trigger>
            <NavigationMenu.Content>Item one content</NavigationMenu.Content>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger>Item two</NavigationMenu.Trigger>
            <NavigationMenu.Content>Item Two content</NavigationMenu.Content>
          </NavigationMenu.Item>
          <NavigationMenu.Indicator>
            <TriangleLeftIcon />
          </NavigationMenu.Indicator>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    );
  },
  args: {
    orientation: 'vertical',
  },
};

export const VerticalWithSubMenu: Story = {
  render: function Render(args) {
    return (
      <NavigationMenu.Root {...args}>
        <NavigationMenu.List>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger>Item one</NavigationMenu.Trigger>
            <NavigationMenu.Content>Item one content</NavigationMenu.Content>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger>Item two</NavigationMenu.Trigger>
            <NavigationMenu.Content>
              <NavigationMenu.Sub defaultValue="sub1" orientation="vertical">
                <NavigationMenu.List>
                  <NavigationMenu.Item value="sub1">
                    <NavigationMenu.Trigger>Sub item one</NavigationMenu.Trigger>
                    <NavigationMenu.Content>Sub item one content</NavigationMenu.Content>
                  </NavigationMenu.Item>
                  <NavigationMenu.Item value="sub2">
                    <NavigationMenu.Trigger>Sub item two</NavigationMenu.Trigger>
                    <NavigationMenu.Content>Sub item two content</NavigationMenu.Content>
                  </NavigationMenu.Item>
                </NavigationMenu.List>
              </NavigationMenu.Sub>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
          <NavigationMenu.Indicator />
        </NavigationMenu.List>
      </NavigationMenu.Root>
    );
  },
  args: {
    orientation: 'vertical',
  },
};

export const Extended: Story = {
  render: function Render(args) {
    return (
      <NavigationMenu.Root {...args} className="navigation-menu-story__extended">
        <NavigationMenu.List>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger>Libraries</NavigationMenu.Trigger>
            <NavigationMenu.Content>
              <div className="navigation-menu-story__items">
                <div className="navigation-menu-story__item">
                  <b>themed</b>
                  <p>Next generation web theming made simple.</p>
                </div>
                <div className="navigation-menu-story__item">
                  <b>themed-generator</b>
                  <p>Auto-generate beautiful themes for your website.</p>
                </div>
                <div className="navigation-menu-story__item">
                  <b>sass-loader</b>
                  <p>Custom loaders for SASS running in the web.</p>
                </div>
                <div className="navigation-menu-story__item">
                  <b>UI</b>
                  <p>Themable component library.</p>
                </div>
              </div>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger>Audience</NavigationMenu.Trigger>
            <NavigationMenu.Content>
              <div className="navigation-menu-story__items">
                <div className="navigation-menu-story__item">
                  <b>Developers</b>
                  <p>Super customizable and easy-to-learn utilities.</p>
                </div>
                <div className="navigation-menu-story__item">
                  <b>Designers</b>
                  <p>Total control over the design of components, colors etc.</p>
                </div>
                <div className="navigation-menu-story__item">
                  <b>Decision-makers</b>
                  <p>Zero-cost, trusted tech-stack.</p>
                </div>
              </div>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger>Read more</NavigationMenu.Trigger>
            <NavigationMenu.Content>
              <NavigationMenu.Sub defaultValue="sub1" orientation="vertical">
                <NavigationMenu.List className="navigation-menu-story__items">
                  <NavigationMenu.Item value="sub1">
                    <NavigationMenu.Trigger className="navigation-menu-story__item">Sub item one</NavigationMenu.Trigger>
                    <NavigationMenu.Content>
                      <div className="navigation-menu-story__items">
                        <div className="navigation-menu-story__item">
                          <b>Developers</b>
                          <p>Super customizable and easy-to-learn utilities.</p>
                        </div>
                        <div className="navigation-menu-story__item">
                          <b>Designers</b>
                          <p>Total control over the design of components, colors etc.</p>
                        </div>
                        <div className="navigation-menu-story__item">
                          <b>Decision-makers</b>
                          <p>Zero-cost, trusted tech-stack.</p>
                        </div>
                      </div>
                    </NavigationMenu.Content>
                  </NavigationMenu.Item>
                  <NavigationMenu.Item value="sub2">
                    <NavigationMenu.Trigger className="navigation-menu-story__item">Sub item two</NavigationMenu.Trigger>
                    <NavigationMenu.Content>
                      <div className="navigation-menu-story__items">
                        <div className="navigation-menu-story__item">
                          <b>Developers</b>
                          <p>Super customizable and easy-to-learn utilities.</p>
                        </div>
                        <div className="navigation-menu-story__item">
                          <b>Designers</b>
                          <p>Total control over the design of components, colors etc.</p>
                        </div>
                        <div className="navigation-menu-story__item">
                          <b>Decision-makers</b>
                          <p>Zero-cost, trusted tech-stack.</p>
                        </div>
                      </div>
                    </NavigationMenu.Content>
                  </NavigationMenu.Item>
                  <NavigationMenu.Item value="sub3">
                    <NavigationMenu.Trigger className="navigation-menu-story__item">Sub last</NavigationMenu.Trigger>
                    <NavigationMenu.Content>
                      <div className="navigation-menu-story__items">
                        <div className="navigation-menu-story__item">
                          <b>Developers</b>
                          <p>Super customizable and easy-to-learn utilities.</p>
                        </div>
                        <div className="navigation-menu-story__item">
                          <b>Designers</b>
                          <p>Total control over the design of components, colors etc.</p>
                        </div>
                        <div className="navigation-menu-story__item">
                          <b>Decision-makers</b>
                          <p>Zero-cost, trusted tech-stack.</p>
                        </div>
                      </div>
                    </NavigationMenu.Content>
                  </NavigationMenu.Item>

                  <NavigationMenu.Indicator>
                    <TriangleUpIcon />
                  </NavigationMenu.Indicator>
                </NavigationMenu.List>
              </NavigationMenu.Sub>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Link href="https://github.com/janis-me/themed">Github</NavigationMenu.Link>
          </NavigationMenu.Item>

          <NavigationMenu.Indicator>
            <TriangleUpIcon />
          </NavigationMenu.Indicator>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    );
  },
  args: {},
};
