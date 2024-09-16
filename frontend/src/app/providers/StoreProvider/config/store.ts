import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { StateSchema } from './StateSchema'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User/model/slice/userSlice'
import { createReducerManager } from './reducerManager'

export function createReduxStore(
  initialState?: StateSchema, 
  asyncReducers?: ReducersMapObject<StateSchema>,
) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  }

  const reducerManager = createReducerManager(rootReducer);

  const store = configureStore<StateSchema>({
    // @ts-ignore
    reducer: reducerManager.reduce,
    devTools: process.env.NODE_ENV === 'development',
    preloadedState: initialState,
  })

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];