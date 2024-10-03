import { Country } from "entities/Country";
import { ProfileSchema, ValidateProfileError } from "../types/profile";
import { profileActions, profileReducer } from "./profileSlice";
import { Currency } from "entities/Currency";
import { updateProfileData } from "../services/updateProfileData/updateProfileData";

const data = {
    username: 'admin2',
    age: 22,
    country: Country.Ukraine,
    firstname: "Sergey",
    lastname: 'Konovalov',
    city: 'Yekaterinburg',
    currency: Currency.RUB,
}

describe('profileSlice.test', () => {
  test('test set readonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };
    expect(profileReducer(
      state as ProfileSchema, 
      profileActions.setReadonly(true)
    )).toEqual({ readonly: true });
  })

  test('test cancel edit', () => {
    const state: DeepPartial<ProfileSchema> = { data, form: { username: '' }};
    
    expect(profileReducer(
      state as ProfileSchema, 
      profileActions.cancelEdit()
    )).toEqual({
      form: data,
      validateErrors: undefined,
      readonly: true,
      data
    });
  })

  test('test update profile', () => {
    const state: DeepPartial<ProfileSchema> = { form: { username: '123' }};
    
    expect(profileReducer(
      state as ProfileSchema, 
      profileActions.updateProfile({ username: 'trigger' })
    )).toEqual({
      form: { username: 'trigger' }
    });
  })

  test('test update profile status pending', () => {
    const state: DeepPartial<ProfileSchema> = { 
      isLoading: false, 
      validateError: [ValidateProfileError.SERVER_ERROR] 
    };
    
    expect(profileReducer(
      state as ProfileSchema, 
      updateProfileData.pending,
    )).toEqual({
      isLoading: true,
      validateErrors: undefined
    });
  })

  test('test update profile status fullfiled', () => {
    const state: DeepPartial<ProfileSchema> = { 
      isLoading: true,
    };
    
    expect(profileReducer(
      state as ProfileSchema, 
      updateProfileData.fulfilled(data, ''),
    )).toEqual({
      isLoading: false,
      validateError: undefined,
      readonly: true,
      data,
      form: data,
    });
  })

})