export const stories = ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"];
export const addons = [
  "@storybook/addon-links",
  "@storybook/addon-essentials",
  "@storybook/addon-interactions",
  "@storybook/preset-create-react-app",
];
export const framework = "@storybook/react";
export const core = {
  builder: "@storybook/builder-webpack5",
};
