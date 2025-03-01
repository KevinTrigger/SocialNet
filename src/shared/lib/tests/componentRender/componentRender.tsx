import { ReducersMapObject } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { ThemeProvider } from "app/providers/ThemeProvider";
import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";
import { Theme } from "shared/const/theme";
import i18nForTests from "shared/config/i18n/i18nForTests";
import "app/styles/index.scss";

export interface componentRenderOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
  theme?: Theme;
}

export interface TestProviderProps {
  children: ReactNode;
  options?: componentRenderOptions;
}

export const TestProvider = (props: TestProviderProps) => {
  const { children, options = {} } = props;
  const {
    route = "/",
    initialState,
    asyncReducers,
    theme = Theme.LIGHT,
  } = options;

  return (
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider asyncReducers={asyncReducers} initialState={initialState}>
        <I18nextProvider i18n={i18nForTests}>
          <ThemeProvider initialTheme={theme}>{children}</ThemeProvider>
        </I18nextProvider>
      </StoreProvider>
    </MemoryRouter>
  );
};

export const componentRender = (
  component: ReactNode,
  options?: componentRenderOptions
) => {
  return render(<TestProvider options={options}>{component}</TestProvider>);
};
