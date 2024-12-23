import { StoryFn } from "@storybook/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { articleDetailsReducer } from "entities/Article/model/slice/articleDetailsSlice";
import { addCommentFormReducer } from "features/AddNewComment/model/slice/addCommentFormSlice";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";
import { profileReducer } from "features/EditableProfileCard";
import { articleDetailsPageReducer } from "pages/ArticleDetailsPage/model/slice";
import { ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  articleDetailsPage: articleDetailsPageReducer,
  addCommentForm: addCommentFormReducer,
};

export const StoreDecorator =
  (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) =>
  (StoryComponent: StoryFn) =>
    (
      <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
      >
        <StoryComponent />
      </StoreProvider>
    );
