import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";
import { mergeConfig, loadConfigFromFile, ConfigEnv } from "vite";


const config: StorybookConfig = {
  stories: [
    "../../src/**/*.stories.@(ts|tsx)"
  ],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  core: {
    builder: '@storybook/builder-vite'
  },
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  async viteFinal(config, { configType }) {
    const configEnv: ConfigEnv = {
      mode: configType === 'PRODUCTION' ? 'production' : 'development',
      command: 'serve',
    }
    const userConfig = await loadConfigFromFile(
      configEnv,
      path.resolve(__dirname, "../../vite.config.ts")
    );

    const mergedConfig = mergeConfig(config, userConfig?.config ?? {});

    return mergeConfig(mergedConfig, {
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: `@import "@/app/styles/index.scss";`
          }
        }
      }
    });
  },
};
export default config;
