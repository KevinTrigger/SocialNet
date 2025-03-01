import { Profile } from "entities/Profile";

export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
  validateError?: ValidateProfileError[];
}

export enum ValidateProfileError {
  INCORRECT_USER_FIRSTNAME = "INCORRECT_USER_FIRSTNAME",
  INCORRECT_USER_LASTNAME = "INCORRECT_USER_LASTNAME",
  INCORRECT_USER_USERNAME = "INCORRECT_USER_USERNAME",
  INCORRECT_USER_AGE = "INCORRECT_USER_AGE",
  INCORRECT_USER_COUNTRY = "INCORRECT_USER_COUNTRY",
  INCORRECT_CHARACTERS = "INCORRECT_CHARACTERS",
  INCORRECT_USER_AVATAR = "INCORRECT_USER_AVATAR",
  NO_DATA = "NO_DATA",
  SERVER_ERROR = "SERVER_ERROR"
}