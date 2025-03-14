import { User } from "entities/User";

export enum ArticlesSortField {
  VIEWS = 'views',
  TITLE = 'title',
  CREATED = 'createdAt'
}

export interface ArticleBlockBase {
  id: string;
  type: ArticleBlockType;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
  type: ArticleBlockType.CODE;
  code: string;
}

export interface ArticleImageBlock extends ArticleBlockBase {
  type: ArticleBlockType.IMAGE;
  src: string;
  title?: string;
}

export interface ArticleTextBlock extends ArticleBlockBase {
  type: ArticleBlockType.TEXT;
  title?: string;
  paragraphs: string[];
}

export enum ArticleBlockType {
  TEXT = "TEXT",
  CODE = "CODE",
  IMAGE = "IMAGE"
}

export enum ArticleType {
  ALL = "ALL",
  IT = "IT",
  SCIENCE = "SCIENCE",
  ECONOMICS = "ECONOMICS"
}

export enum ArticleViewMode {
  BIG = "BIG",
  SMALL = "SMALL"
}

export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock;

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  type: ArticleType[];
  blocks: ArticleBlock[];
  user: User;
}