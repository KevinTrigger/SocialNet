import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider';
import { Article, ArticlesSortField, ArticleViewMode } from 'entities/Article';
import { ArticlesPageSchema } from '../types/articlesPageSchema';
import { fetchArticles } from '../services/fetchArticles/fetchArticles';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { SortOrder } from 'shared/types';

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
})

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage || articlesAdapter.getInitialState()
)

const articlesPageSlice = createSlice({
  name: 'articlesPage',
  initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
    view: ArticleViewMode.SMALL,
    _inited: false,
    // pagination
    hasMore: true,
    page: 1,
    limit: 9,
    // filters
    order: 'asc',
    search: '',
    sort: ArticlesSortField.CREATED
  }),
  reducers: {
    setViewMode: (state, action: PayloadAction<ArticleViewMode>) => {
      state.view = action.payload;
      localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload);
    },
    initState: (state) => {
      const view = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as ArticleViewMode;
      state.view = view;
      state.limit = view === ArticleViewMode.SMALL ? 9 : 4;
      state._inited = true;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setOrder: (state, action: PayloadAction<SortOrder>) => {
      state.order = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setSort: (state, action: PayloadAction<ArticlesSortField>) => {
      state.sort = action.payload;
    }
  },
  extraReducers(builder) {
    builder
    .addCase(fetchArticles.pending, (state) => {
      state.error = undefined;
      state.isLoading = true;
    })
    .addCase(fetchArticles.fulfilled, (state, action: PayloadAction<Article[]>) => {
      state.isLoading = false;
      articlesAdapter.addMany(state, action.payload);
      state.hasMore = action.payload.length > 0;
    })
    .addCase(fetchArticles.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }) 
  },
})

export const { reducer: articlesPageReducer } = articlesPageSlice;
export const { actions: articlesPageActions } = articlesPageSlice;