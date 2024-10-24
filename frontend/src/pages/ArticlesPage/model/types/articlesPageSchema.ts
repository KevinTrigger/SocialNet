import { EntityState } from "@reduxjs/toolkit";
import { Article, ArticlesSortField, ArticleViewMode } from "entities/Article";
import { SortOrder } from "shared/types";

export interface ArticlesPageSchema extends EntityState<Article>{
  isLoading?: boolean;
  error?: string;
  
  // pagination
  page: number;
  limit: number;
  hasMore: boolean;

  // filters
  view: ArticleViewMode;
  order: SortOrder;
  sort: ArticlesSortField;
  search: string;

  _inited: boolean;
}