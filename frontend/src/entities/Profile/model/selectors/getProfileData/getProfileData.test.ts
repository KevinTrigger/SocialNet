import { getProfileData } from "./getProfileData";
import { StateSchema } from "app/providers/StoreProvider";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import avatar from 'shared/assets/tests/storybook.png';

describe('getProfileData', () => {
  test('should return valid profile data', () => {
    const data = {
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
        data,
      }
    }
    expect(getProfileData(state as StateSchema)).toEqual(data);
  })

  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: 'error'
      }
    }
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  })
})  