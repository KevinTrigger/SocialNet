import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "shared/lib/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import "./styles/index.scss";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <AppRouter />
      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  );
}

export default App;
