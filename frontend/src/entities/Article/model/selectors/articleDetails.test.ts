import { StateSchema } from "app/providers/StoreProvider";
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from "./articleDetails";


describe('getProfileData', () => {
  test('should return data', () => {

    const article = {
      id: '1',
      title: 'Заголовок статьи'
    }

    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data: article
      }
    }
    expect(getArticleDetailsData(state as StateSchema)).toEqual(article);
  })

  test('should return undefined (empty data)', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
  })


  test('should return undefined error', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined);
  })

  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        error: 'error'
      }
    }
    expect(getArticleDetailsError(state as StateSchema)).toEqual('error');
  })

  test('should return isLoading = undefined', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(false);
  })

  test('should return isLoading = true', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading: true
      }
    }
    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
  })
})  