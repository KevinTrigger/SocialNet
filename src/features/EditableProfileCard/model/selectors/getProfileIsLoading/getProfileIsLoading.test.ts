import { StateSchema } from "app/providers/StoreProvider";
import { getProfileIsLoading } from "./getProfileIsLoading";

describe('getProfileData', () => {
  test('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: true
      }
    }
    expect(getProfileIsLoading(state as StateSchema)).toEqual(true);
  })

  test('should return false', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: false
      }
    }
    expect(getProfileIsLoading(state as StateSchema)).toEqual(false);
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined);
  })
})  