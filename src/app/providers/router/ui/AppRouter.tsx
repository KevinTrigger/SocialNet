import { memo, Suspense, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import { PageLoader } from "widgets/PageLoader";
import { RequireAuth } from "./RequireAuth";
import { UserRole } from "entities/User";
import { AppRoutesProps } from "shared/types/router";
import { routeConfig } from "../config/routeConfig";

const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = (
      <Suspense fallback={<PageLoader />}>{route.element}</Suspense>
    );

    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          route.authOnly ? (
            <RequireAuth roles={[UserRole.ADMIN, UserRole.MANAGER]}>
              {element}
            </RequireAuth>
          ) : (
            element
          )
        }
      />
    );
  }, []);

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};

export default memo(AppRouter);
