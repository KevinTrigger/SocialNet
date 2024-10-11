import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { fetchCommentsByArticleId } from "./fetchCommentsByArticleId";
import { Comment } from "entities/Comment";

const comments: Comment[] = [
  {
    id: '1',
    text: 'Text',
    user: {
      id: '1',
      username: 'Kevin'
    }
  }
];

describe('fetchCommentsByArticleId.test', () => {
    test('success fetch comments by article id', async () => {
        const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
        thunk.api.get.mockResolvedValue(Promise.resolve({ data: comments }));

        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalledWith('/comments', {
          params: {
            _expand: "user",
            articleId: "1"
          }
        });
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(comments);
    });

    test('error fetch comments by article id', async () => {
        const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
        thunk.api.get.mockRejectedValue(Promise.resolve({ status: 404 }));
        const result = await thunk.callThunk('2');

        expect(thunk.api.get).toHaveBeenCalledWith('/comments', {
          params: {
            _expand: 'user',
            articleId: "2"
          }
        });
        expect(result.meta.requestStatus).toBe('rejected');
    });
});