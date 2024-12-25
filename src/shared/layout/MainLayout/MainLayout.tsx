import { FC, ReactNode } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cl from "./MainLayout.module.scss";

interface MainLayoutProps {
  className?: string;
  header: ReactNode;
  content: ReactNode;
  sidebar: ReactNode;
  toolbar?: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = (props) => {
  const { className, content, header, sidebar, toolbar } = props;

  return (
    <div className={classNames(cl.MainLayout, {}, [className])}>
      <div className={cl.sidebar}>{sidebar}</div>
      <div className={cl.content}>{content}</div>
      <div className={cl.rightbar}>
        <div className={cl.header}>{header}</div>
        <div className={cl.toolbar}>{toolbar}</div>
      </div>
    </div>
  );
};
