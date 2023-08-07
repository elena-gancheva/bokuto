import type { StorybookConfig } from "@storybook/nextjs";
import path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    '@storybook/addon-a11y',
    '@storybook-addon-code-preview'
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
      // Filter out third-party props from node_modules except @progress packages
      propFilter: (prop) =>
        prop.parent ? !/node_modules\/(?!@progress)/.test(prop.parent.fileName) : true,
    },
  },
  docs: {
    autodocs: 'tag',
    defaultName: 'Overview',
  },
};

export default config;
