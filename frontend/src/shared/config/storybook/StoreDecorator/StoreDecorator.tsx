import { Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { StoryFn } from "@storybook/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { LoginSchema } from "features/AuthByUsername";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";

const defaultAsyncReducers: Partial<ReducersMapObject<StateSchema>> = {
  loginForm: loginReducer as Reducer<LoginSchema | undefined>,
};

export const StoreDecorator =
  (
    state: Partial<StateSchema>,
    asyncReducers?: Partial<ReducersMapObject<StateSchema>>
  ) =>
  (StoryComponent: StoryFn) => (
    <StoreProvider
      initialState={state}
      asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
      <StoryComponent />
    </StoreProvider>
  );
