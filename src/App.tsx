import { Link, Route, Routes } from "react-router-dom";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { Suspense } from "react";
import "./styles/index.scss";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";

function App() {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Theme change</button>
      <Link to={"/"}>to Main</Link>
      <br />
      <Link to={"/about"}>to About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<AboutPageAsync />} path={"/about"} />
          <Route element={<MainPageAsync />} path={"/"} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
