import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserInited, userActions } from "entities/User";
import { Sidebar } from "widgets/Sidebar";
import { HStack } from "shared/ui/Stack";
import { useTheme } from "./providers/ThemeProvider";

const App = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const isInited = useSelector(getUserInited);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <HStack>
          <Sidebar />
          {isInited && <AppRouter />}
        </HStack>
      </Suspense>
    </div>
  );
};

export default App;
