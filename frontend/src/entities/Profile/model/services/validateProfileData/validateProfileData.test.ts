import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { validateProfileData } from "./validateProfileData";
import { ValidateProfileError } from "../../types/profile";

const data = {
    username: 'admin',
    age: 22,
    country: Country.Russia,
    firstname: "Sergey",
    lastname: 'Konovalov',
    city: 'Yekaterinburg',
    currency: Currency.RUB,
};

describe('validateProfileData.test', () => {
    test('success validate', async () => {
      const result = validateProfileData(data);

      expect(result).toEqual([]);
    });

    test('with number in first and lastname', async () => {
      const result = validateProfileData({...data, firstname: 'Sergey1', lastname: "Konovalov2"});

      expect(result).toEqual([
        ValidateProfileError.INCORRECT_CHARACTERS
      ]);
    });

    test('with incorrect country', async () => {
      const result = validateProfileData({...data, country: undefined });

      expect(result).toEqual([
        ValidateProfileError.INCORRECT_USER_COUNTRY
      ]);
    });
    
    test('with empty firstname or lastname', async () => {
      const result = validateProfileData({...data, firstname: '', lastname: '' });

      expect(result).toEqual([
        ValidateProfileError.INCORRECT_USER_FIRSTNAME,
        ValidateProfileError.INCORRECT_USER_LASTNAME
      ]);
    });

    test('with empty username', async () => {
      const result = validateProfileData({...data, username: '' });

      expect(result).toEqual([
        ValidateProfileError.INCORRECT_USER_USERNAME,
      ]);
    });

    test('with incorrect age', async () => {
      const result = validateProfileData({...data, age: 0 });

      expect(result).toEqual([
        ValidateProfileError.INCORRECT_USER_AGE,
      ]);
    });

    test('with incorrect age', async () => {
      const result = validateProfileData({...data, age: 0 });

      expect(result).toEqual([
        ValidateProfileError.INCORRECT_USER_AGE,
      ]);
    });
});