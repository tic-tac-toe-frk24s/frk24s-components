

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  "stories": [
<<<<<<< HEAD
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
=======
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
>>>>>>> 725daaf03e9ab8d2c5517b0c534a95f99db5114f
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
<<<<<<< HEAD
    "@storybook/addon-onboarding",
=======
>>>>>>> 725daaf03e9ab8d2c5517b0c534a95f99db5114f
    "@storybook/addon-a11y",
    "@storybook/addon-vitest"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  }
};
export default config;