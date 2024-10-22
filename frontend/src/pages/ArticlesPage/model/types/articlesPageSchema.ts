import { EntityState } from "@reduxjs/toolkit";
import { Article, ArticleViewMode } from "entities/Article";

export interface ArticlesPageSchema extends EntityState<Article>{
  isLoading?: boolean;
  error?: string;
  
  view: ArticleViewMode;
  // pagination
  page: number;
  limit?: number;
  hasMore: boolean;

  _inited: boolean;
}