import React, { FC } from 'react';
import PropTypes from 'prop-types';

import { Button, ButtonProps } from '@progress/kendo-react-buttons';

import '@progress/kendo-theme-default/dist/all.css';

/**
 * Primary UI component for user interaction
 */
export const KendoButton: FC<ButtonProps> = (props: ButtonProps) => <Button {...props}>Button</Button>;

KendoButton.propTypes = {
  // children: PropTypes.node,
  /**
   * What background color to use
   */
  // selected: PropTypes.bool,
  togglable: PropTypes.bool,
  icon: PropTypes.string,
  // svgIcon: svgIconPropType,
  iconClass: PropTypes.string,
  imageUrl: PropTypes.string,
  imageAlt: PropTypes.string,
  size: PropTypes.oneOf([null, 'small','medium', 'large']),
  rounded: PropTypes.oneOf([null, 'small', 'medium', 'large', 'full']),
  fillMode: PropTypes.oneOf([null, 'flat', 'link', 'outline', 'solid']),
  // eslint-disable-next-line max-len
  themeColor: PropTypes.oneOf([null, 'base', 'primary', 'secondary', 'tertiary', 'info', 'success', 'warning', 'error', 'dark', 'light', 'inverse'])
};


// ButtonDemo.defaultProps = {
//   backgroundColor: null,
//   primary: false,
//   size: 'medium',
//   onClick: undefined,
// };
