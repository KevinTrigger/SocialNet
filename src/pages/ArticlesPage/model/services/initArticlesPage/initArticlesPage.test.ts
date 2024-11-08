import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { fetchArticles } from "../fetchArticles/fetchArticles";
import { initArticlesPage } from "./initArticlesPage";

jest.mock('../fetchArticles/fetchArticles');

const searchParams = new URLSearchParams(window.location.search);

describe('initArticlesPage.test', () => {
    test('called dispatch when data NOT inited', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
          articlesPage: {
            page: 2,
            ids: [],
            entities: {},
            limit: 5,
            isLoading: false,
            hasMore: true,
            _inited: false
          }
        });

        await thunk.callThunk(searchParams);

        expect(thunk.dispatch).toHaveBeenCalledTimes(4);
        expect(fetchArticles).toHaveBeenCalledWith({});
    });

    test('not called dispatch when data is inited', async () => {
      const thunk = new TestAsyncThunk(initArticlesPage, {
        articlesPage: {
          page: 2,
          ids: [],
          entities: {},
          limit: 5,
          isLoading: false,
          hasMore: false,
          _inited: true
        }
      });

      await thunk.callThunk(searchParams);

      expect(thunk.dispatch).toHaveBeenCalled();
      expect(fetchArticles).not.toHaveBeenCalled();
  });
});