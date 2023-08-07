import type { Preview } from "@storybook/react";
import { Title, Description, Primary, Controls, Stories, Subtitle, ArgTypes } from '@storybook/blocks';
import React from "react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
      docs: {
        toc: true,
        page: () => (
          <>
            <Title />
            <Subtitle />
            <Description />
            <Primary />
            <ArgTypes />
            <Controls />
            <Stories />
          </>
        ),
      },
    },
  }
};


export default preview;
