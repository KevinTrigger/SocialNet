import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { FC, Suspense, useState } from "react";
import { Modal } from "shared/ui/Modal";

const App: FC = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <button onClick={() => setIsOpen(true)}>open</button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <div>
            Lorem ipsum dolatae omnis odio cumque fuga ipsum ratione? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum alias unde culpa exercitationem. Laboriosam assumenda, harum aspernatur delectus exercitationem dignissimos quaerat magni neque aliquam voluptatibus autem ipsa illum doloremque commodi?
          </div>
        </Modal>
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
