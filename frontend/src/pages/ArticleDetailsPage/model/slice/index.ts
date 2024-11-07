import { combineReducers } from "@reduxjs/toolkit";
import { articleDetailsCommentsReducer } from "./articleDetailsCommentsSlice";
import { articleDetailsPageRecommendationsReducer } from "./articleDetailsPageRecommendationSlice";
import { ArticleDetailsPageSchema } from "../types";

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
  recommendations: articleDetailsPageRecommendationsReducer,
  comments: articleDetailsCommentsReducer
})