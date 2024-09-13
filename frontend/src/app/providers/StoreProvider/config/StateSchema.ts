import { EnhancedStore, Reducer, ReducersMapObject, UnknownAction } from "@reduxjs/toolkit";
// @ts-ignore
import { CombinedState } from "@reduxjs/toolkit";
import { CounterSchema } from "entities/Counter";
import { UserSchema } from "entities/User";
import { LoginSchema } from "features/AuthByUsername/model/types/loginSchema";

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;

  // Асинхронные редьюсеры
  loginForm?: LoginSchema;
}

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  // @ts-ignore
  reduce: (state: StateSchema, action: UnknownAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}