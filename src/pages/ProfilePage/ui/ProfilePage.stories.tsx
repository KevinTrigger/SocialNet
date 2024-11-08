import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import ProfilePage from "./ProfilePage";
import { RouterDecorator } from "../../../shared/config/storybook/RouteDecorator/RouterDecorator";
import { ThemeDecorator } from "../../../shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import avatar from "shared/assets/tests/storybook.png";

const meta: Meta<typeof ProfilePage> = {
  title: "pages/ProfilePage",
  component: ProfilePage,
  decorators: [RouterDecorator],
};

export default meta;

type Story = StoryObj<typeof ProfilePage>;

export const Light: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      profile: {
        form: {
          firstname: "Sergey",
          lastname: "Konovalov",
          username: "Kevin Trigger",
          age: 22,
          avatar: avatar,
          city: "Yekaterinburg",
          country: Country.Russia,
          currency: Currency.RUB,
        },
      },
    }),
  ],
};

export const Dark: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      profile: {
        form: {
          firstname: "Sergey",
          lastname: "Konovalov",
          username: "Kevin Trigger",
          age: 22,
          avatar: avatar,
          city: "Yekaterinburg",
          country: Country.Russia,
          currency: Currency.RUB,
        },
      },
    }),
  ],
};
