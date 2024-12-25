import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Code } from "./Code";
import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "shared/const/theme";

const meta: Meta<typeof Code> = {
  title: "ui/Code",
  component: Code,
};

export default meta;

type Story = StoryObj<typeof Code>;

export const Light: Story = {
  args: {
    text:
      '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
  },
};

export const Dark: Story = {
  args: {
    text:
      '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
