import { StateSchema } from "app/providers/StoreProvider";
import { getProfileForm } from "./getProfileForm";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import avatar from 'shared/assets/tests/storybook.png';

describe('getProfileData', () => {
  test('should return form', () => {
    const form = {
      firstname: "Sergey",
          lastname: "Konovalov",
          username: "Kevin Trigger",
          age: 22,
          avatar: avatar,
          city: "Yekaterinburg",
          country: Country.Russia,
          currency: Currency.RUB,
    };

    const state: DeepPartial<StateSchema> = {
      profile: {
        form
      }
    }
    expect(getProfileForm(state as StateSchema)).toEqual(form);
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  })
})  