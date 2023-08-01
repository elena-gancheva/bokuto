import type { Meta, StoryObj } from '@storybook/react';
import { KendoButton as Button } from './Button';

const meta = {
  title: 'Buttons/Button',
  component: Button,
  parameters: {
    componentSubtitle: 'The KendoReact Button provides a clickable UI functionality, and you can configure it to perform any action or trigger an event.',
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The Button provides a predefined set of appearance options.
 * Apart from the default vision of the Button, these alternative styling options enable you to configure each individual aspect of the appearance of a Button.
 */
export const Appearance: Story = {
  args: {
    size: 'medium',
    fillMode: 'solid',
    themeColor: 'primary',
    rounded: 'small'
  },
};

/**
 * By default, the Button is enabled.
 * To disable it, set the disabled property to true.
 */
export const DisabledButton: Story = {
  args: {
    disabled: true
  }
};

/**
 * You can enhance the textual content of the Button by adding image, predefined, or custom icons to it.
 * With a view to the web standards, it is better to use a background image because icons are used for decoration and not for representing structural content.
 * The Button provides options for:
 * 
 * Using the built-in KendoReact icons. The built-in icons are applied through the icon property and displayed as a background for the Button. To see the full list of the web font icons in KendoReact, refer to the article on styles and layout.
 * Adding image icons. They are applied through the imageUrl property of the component.
 * Adding FontAwesome and other font icons. They are implemented by setting the required third-party CSS classes through the iconClass property.
 */
export const IconButton: Story = {
  args: {
    icon: 'edit'
  }
};

/**
 * The Button enables you to indicate whether it is active or inactive.
 * To make a Button toggleable, update the default false configuration of the togglable property and set it to true.
 */
export const ToggleableButton: Story = {
  args: {
    togglable: true
  }
};