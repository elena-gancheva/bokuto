import React, { FC } from 'react';
import { Button as KendoButton, ButtonProps } from '@progress/kendo-react-buttons';

import '@progress/kendo-theme-default/dist/all.css';

/**
 * To make the Button even more user-friendly and intuitive to use, you can display textual content, predefined icons, images, custom icons, or render a combination of textual and image content within the Button.
 * The KendoReact Button is distributed through the kendo-react-buttons NPM package
 * 
 * The following example demonstrates the Button component in action.
 */
export const Button: FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <KendoButton {...props}>Button</KendoButton>
  );
}

// Button.propTypes = {
//   // children: PropTypes.node,
//   /**
//    * What background color to use
//    */
//   // selected: PropTypes.bool,
//   togglable: PropTypes.bool,
//   icon: PropTypes.string,
//   // svgIcon: svgIconPropType,
//   iconClass: PropTypes.string,
//   imageUrl: PropTypes.string,
//   imageAlt: PropTypes.string,
//   size: PropTypes.oneOf([null, 'small','medium', 'large']),
//   rounded: PropTypes.oneOf([null, 'small', 'medium', 'large', 'full']),
//   fillMode: PropTypes.oneOf([null, 'flat', 'link', 'outline', 'solid']),
//   themeColor: PropTypes.oneOf([null, 'base', 'primary', 'secondary', 'tertiary', 'info', 'success', 'warning', 'error', 'dark', 'light', 'inverse'])
// };