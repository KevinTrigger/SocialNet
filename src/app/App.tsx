import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { Suspense, useEffect } from "react";
import { useSelector } from "react-redux";
import { getUserInited } from "entities/User";
import { Sidebar } from "widgets/Sidebar";
import { HStack } from "shared/ui/Stack";
import { useTheme } from "./providers/ThemeProvider";
import { initAuthData } from "entities/User";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { PageLoader } from "widgets/PageLoader";
import { ToggleFeatures } from "shared/lib/features";

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

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <div className={classNames("app_redesigned", {}, [theme])}>
          <Suspense fallback="">
            <Navbar />
            <HStack>
              <Sidebar />
              {isInited && <AppRouter />}
            </HStack>
          </Suspense>
        </div>
      }
      off={
        <div className={classNames("app", {}, [theme])}>
          <Suspense fallback="">
            <Navbar />
            <HStack>
              <Sidebar />
              {isInited && <AppRouter />}
            </HStack>
          </Suspense>
        </div>
      }
    />
  );
};

export default App;
