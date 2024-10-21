import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { fetchNextArticlesPage } from "./fetchNextArticlesPage";
import { fetchArticles } from "../fetchArticles/fetchArticles";

jest.mock('../fetchArticles/fetchArticles');

describe('fetchNextArticlesPage.test', () => {
    test('fetch articles on next page', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
          articlesPage: {
            page: 2,
            ids: [],
            entities: {},
            limit: 5,
            isLoading: false,
            hasMore: true
          }
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(4);
        expect(fetchArticles).toHaveBeenCalledWith({page: 3});
    });

    test('fetch articles on next page with hasMore = false', async () => {
      const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
        articlesPage: {
          page: 2,
          ids: [],
          entities: {},
          limit: 5,
          isLoading: false,
          hasMore: false
        }
      });

      await thunk.callThunk();

      expect(thunk.dispatch).toHaveBeenCalledTimes(2);
      expect(fetchArticles).not.toHaveBeenCalled();
  });
});