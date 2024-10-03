import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { updateProfileData } from "./updateProfileData";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
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

describe('updateProfileData.test', () => {
    test('success update', async () => {
      const thunk = new TestAsyncThunk(updateProfileData, {
        profile: {
          form: data
        }
      });

        thunk.api.put.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error update', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
          profile: {
            form: data
          }
        });
        
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
        
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([
          ValidateProfileError.SERVER_ERROR
        ])
    });

    test('validate error (number in firstname)', async () => {
      const thunk = new TestAsyncThunk(updateProfileData, {
        profile: {
          form: {
            ...data,
            firstname: "Sergey911"
          }
        }
      });
      
      thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
      
      const result = await thunk.callThunk();

      expect(result.meta.requestStatus).toBe('rejected');
      expect(result.payload).toEqual([
        ValidateProfileError.INCORRECT_CHARACTERS
      ]);
    });
    
    test('validate error (not valid country)', async () => {
      const thunk = new TestAsyncThunk(updateProfileData, {
        profile: {
          form: {
            ...data,
            country: undefined
          }
        }
      });
      
      thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
      
      const result = await thunk.callThunk();

      expect(result.meta.requestStatus).toBe('rejected');
      expect(result.payload).toEqual([
        ValidateProfileError.INCORRECT_USER_COUNTRY
      ])
  });

  test('validate error (not valid country)', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: {
          ...data,
          country: undefined
        }
      }
    });
    
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([
      ValidateProfileError.INCORRECT_USER_COUNTRY
    ])
  });
});