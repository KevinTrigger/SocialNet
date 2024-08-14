import type { Preview } from "@storybook/react";
import './../../src/app/styles/index.scss';
import {StyleDecorator} from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';

export const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [(Story) => (
    Story(StyleDecorator)
  )]
};
