import { Profile, ValidateProfileError } from "../../types/profile";

export const validateProfileData = (profile?: Profile) => {

  if (!profile) {
    return [ValidateProfileError.NO_DATA];
  }

  const {firstname, lastname, age, country, username} = profile;
  const errors: ValidateProfileError[] = [];

  if (!firstname) {
    errors.push(ValidateProfileError.INCORRECT_USER_FIRSTNAME)
  }

  if (!lastname) {
    errors.push(ValidateProfileError.INCORRECT_USER_LASTNAME)
  }

  if (firstname?.match(/\d{1}/) || lastname?.match(/\d{1}/)) {
    errors.push(ValidateProfileError.INCORRECT_CHARACTERS)
  }

  if (!username) {
    errors.push(ValidateProfileError.INCORRECT_USER_USERNAME)
  }

  if (!age || !Number.isInteger(age)) {
    errors.push(ValidateProfileError.INCORRECT_USER_AGE)
  }

  if (!country) {
    errors.push(ValidateProfileError.INCORRECT_USER_COUNTRY)
  }

  return errors;
}