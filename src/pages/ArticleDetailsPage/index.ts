
export {
  ArticleDetailsPageAsync as ArticleDetailsPage
} from "./ui/ArticleDetailsPage/ArticleDetailsPage.async";

export { type ArticleDetailsCommentSchema } from './model/types/ArticleDetailsCommentSchema';
export { type ArticleDetailsPageRecommendationsSchema } from './model/types/ArticleDetailsPageRecommendationsSchema';
export { type ArticleDetailsPageSchema } from './model/types/index';
export { getArticleRecommendationsError, getArticleRecommendationsIsLoading } from './model/selectors/recommendations';
export { getArticleRecommendations } from './model/slice/articleDetailsPageRecommendationSlice';
export { fetchArticleRecommendations } from './model/services/fetchArticleRecommendations/fetchArticleRecommendations';

export { getCanEditArticle } from "./model/selectors/article";