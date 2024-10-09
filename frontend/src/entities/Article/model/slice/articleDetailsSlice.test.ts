import { ArticleDetailsSchema } from "../types/articleDetailsSchema";
import { articleDetailsReducer } from "./articleDetailsSlice";
import { fetchArticleById } from "../services/fetchArticleById/fetchArticleById";
import { Article, ArticleType } from "../types/article";

const data: Article = {
  id: "1",
  title: "Title",
  subtitle: "subtitle",
  blocks: [],
  createdAt: '21.20.2000',
  img: 'src.img',
  type: [ArticleType.ECONOMICS],
  views: 220
}

describe('profileSlice.test', () => {
  test('test articleDetails status pending', () => {
    const state: DeepPartial<ArticleDetailsSchema> = { 
      isLoading: true
    };
    
    expect(articleDetailsReducer(
      state as ArticleDetailsSchema, 
      fetchArticleById.pending,
    )).toEqual({
      isLoading: true,
      error: undefined,
      data: undefined
    });
  })

  test('test articleDetails status fullfiled', () => {
    const state: DeepPartial<ArticleDetailsSchema> = { 
      isLoading: true,
    };
    
    expect(articleDetailsReducer(
      state as ArticleDetailsSchema, 
      fetchArticleById.fulfilled(data, '2', 'str'),
    )).toEqual({
      isLoading: false,
      error: undefined,
      data
    });
  })

})