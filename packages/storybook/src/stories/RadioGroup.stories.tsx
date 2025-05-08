import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { Label, RadioGroup } from '@janis.me/ui';

import './RadioGroup.stories.scss';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof RadioGroup.Root> = {
  title: 'Components/RadioGroup',
  component: RadioGroup.Root,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  render: args => {
    const [selectedOption, setSelectedOption] = useState<string>('option1');

    return (
      <RadioGroup.Root {...args} value={selectedOption} onValueChange={setSelectedOption}>
        <div className="radio-group-story__group-item">
          <RadioGroup.Item value="option1" id="o1">
            <RadioGroup.Indicator />
          </RadioGroup.Item>
          <Label.Root htmlFor="o1">Option 1</Label.Root>
        </div>
        <div className="radio-group-story__group-item">
          <RadioGroup.Item value="option2" id="o2">
            <RadioGroup.Indicator />
          </RadioGroup.Item>
          <Label.Root htmlFor="o2">Option 2</Label.Root>
        </div>
        <div className="radio-group-story__group-item">
          <RadioGroup.Item value="option3" id="o3">
            <RadioGroup.Indicator />
          </RadioGroup.Item>
          <Label.Root htmlFor="o3">Option 3</Label.Root>
        </div>
      </RadioGroup.Root>
    );
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
