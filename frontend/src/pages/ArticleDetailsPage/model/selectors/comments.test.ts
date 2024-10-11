import { StateSchema } from "app/providers/StoreProvider";
import { getArticleCommentsError, getArticleCommentsIsLoading } from "./comments";
import { getArticleComments } from "../slice/articleDetailsCommentsSlice";


describe('comments tests', () => {
  test('should return valid comments', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsComments: {
        ids: ['1', '2'],
        entities: {
          "1": {
            id: '1', 
            text: 'Комментарий 1', 
            user: {
              avatar: 'test.png',
              id: "1",
              username: 'Kevin'
            }
          },
          "2": {
            id: '2', 
            text: 'Комментарий 2', 
            user: {
              avatar: 'test.png',
              id: "1",
              username: 'Kevin'
            }
          }
        }
      }
    }
    expect(getArticleComments.selectAll(state as StateSchema)).toEqual([
      { id: '1', text: "Комментарий 1", user: { id: "1", username: "Kevin", avatar: "test.png" }},
      { id: '2', text: "Комментарий 2", user: { id: "1", username: "Kevin", avatar: "test.png" }},
    ])
  })

  test('should return empty data', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsComments: {
        entities: {},
        ids: []
      }
    }
    expect(getArticleComments.selectAll(state as StateSchema)).toEqual([]);
  })

  test('should return valid isLoading value', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsComments: {
        isLoading: false,
      }
    }
    expect(getArticleCommentsIsLoading(state as StateSchema)).toEqual(false);
  })

  test('should return undefined isLoading value', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getArticleCommentsIsLoading(state as StateSchema)).toEqual(undefined);
  })

  test('should return error message', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsComments: {
        error: 'error'
      }
    }
    expect(getArticleCommentsError(state as StateSchema)).toEqual('error');
  })

  test('should return error undefined value', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getArticleCommentsError(state as StateSchema)).toEqual(undefined);
  })
})  