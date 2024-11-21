import { CombinedState, configureStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit'
import { StateSchema, ThunkExtraArg } from './StateSchema'
import { userReducer } from 'entities/User/model/slice/userSlice'
import { createReducerManager } from './reducerManager'
import { $api } from 'shared/api/api'
import { scrollSaveReducer } from 'features/ScrollSave'
import { rtkApi } from 'shared/api/rtkApi'

export function createReduxStore(
  initialState?: StateSchema, 
  asyncReducers?: ReducersMapObject<StateSchema>,
) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    user: userReducer,
    scrollSave: scrollSaveReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
  }

  const reducerManager = createReducerManager(rootReducer);

  const extraArg: ThunkExtraArg = {
    api: $api,
  }

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: process.env.NODE_ENV === 'development',
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: extraArg
      }
    }).concat(rtkApi.middleware)
  })

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];