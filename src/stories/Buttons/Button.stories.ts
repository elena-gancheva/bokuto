import type { Meta, StoryObj } from '@storybook/react';

import { KendoButton as Button } from './Button';
import { ButtonProps } from '@progress/kendo-react-buttons';

const meta = {
  title: 'Components/Buttons/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultTheme: Story = {
  args: {
  }
};
