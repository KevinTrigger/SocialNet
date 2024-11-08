import { ArticleDetailsCommentSchema } from "../types/ArticleDetailsCommentSchema";
import { articleDetailsCommentsReducer } from "./articleDetailsCommentsSlice";
import { fetchCommentsByArticleId } from "../services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import {Comment} from 'entities/Comment';

const comments: Comment[] = [
  {
    id: '1', 
    text: 'Комментарий 1', 
    user: {
      avatar: 'test.png',
      id: "1",
      username: 'Kevin'
    }
  },
  {
    id: '2', 
    text: 'Комментарий 2', 
    user: {
      avatar: 'test.png',
      id: "1",
      username: 'Kevin'
    }
  }
];

describe('articleDetailsCommentsSlice.test', () => {
  test('test articleDetailsComments status pending', () => {
    const state: DeepPartial<ArticleDetailsCommentSchema> = { 
      isLoading: true,
      error: "error",
    };
    
    expect(articleDetailsCommentsReducer(
      state as ArticleDetailsCommentSchema, 
      fetchCommentsByArticleId.pending,
    )).toEqual({
      isLoading: true,
      error: undefined,
    });
  })

  test('test articleDetailsComments status fullfiled', () => {
    const state: DeepPartial<ArticleDetailsCommentSchema> = { 
      isLoading: true,
      ids: [],
      entities: {},
    };
    
    expect(articleDetailsCommentsReducer(
      state as ArticleDetailsCommentSchema, 
      fetchCommentsByArticleId.fulfilled(comments, '', ''),
    )).toEqual({
      isLoading: false,
      error: undefined,
      ids: ['1', '2'],
      entities: {
        "1": comments[0],
        "2": comments[1]
      }
    });
  })
})