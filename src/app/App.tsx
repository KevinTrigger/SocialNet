import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { Suspense, useEffect } from "react";
import { useSelector } from "react-redux";
import { getUserInited } from "entities/User";
import { Sidebar } from "widgets/Sidebar";
import { HStack } from "shared/ui/deprecated/Stack";
import { useTheme } from "./providers/ThemeProvider";
import { initAuthData } from "entities/User";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { PageLoader } from "widgets/PageLoader";
import { ToggleFeatures } from "shared/lib/features";
import { MainLayout } from "shared/layout/MainLayout/MainLayout";

const App = () => {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();
  const isInited = useSelector(getUserInited);

  useEffect(() => {
    dispatch(initAuthData());
  }, [dispatch]);

  if (!isInited) {
    return <PageLoader />;
  }

  const DeprecatedApp = () => (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <HStack>
          <Sidebar />
          <AppRouter />
        </HStack>
      </Suspense>
    </div>
  );

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <div className={classNames("app_redesigned", {}, [theme])}>
          <Suspense fallback="">
            <MainLayout
              sidebar={<Sidebar />}
              content={<AppRouter />}
              header={<Navbar />}
              toolbar={<div>Toolbar</div>}
            />
          </Suspense>
        </div>
      }
      off={<DeprecatedApp />}
    />
  );
};

export default App;
