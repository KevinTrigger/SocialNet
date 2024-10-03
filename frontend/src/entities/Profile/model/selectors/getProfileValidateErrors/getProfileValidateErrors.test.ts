import { StateSchema } from "app/providers/StoreProvider";
import { getProfileValidateErrors } from "./getProfileValidateErrors";
import { ValidateProfileError } from "../../types/profile";

describe('getProfileData', () => {
  test('should return true', () => {
    const validateError = [
      ValidateProfileError.INCORRECT_CHARACTERS, ValidateProfileError.INCORRECT_USER_AGE
    ]

    const state: DeepPartial<StateSchema> = {
      profile: {
        validateError
      }
    }
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(validateError);
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
  })
})  