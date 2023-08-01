import type { Meta, StoryObj } from '@storybook/react';
import { KendoGrid as Grid } from './Grid';

const meta = {
  title: 'Grid',
  component: Grid,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'The KendoReact Data Grid (Table) provides 100+ ready-to-use features covering everything from paging, sorting, filtering, editing, and grouping to row and column virtualization, export to PDF and Excel, and accessibility.',
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicGrid: Story = {};
