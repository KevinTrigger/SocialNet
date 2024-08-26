import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cl from "./PageLoader.module.scss";
import { Loader } from "shared/ui/Loader";

interface PageLoaderProps {
  className?: string;
}

const PageLoader: FC<PageLoaderProps> = ({ className }) => {
  return (
    <div className={classNames(cl.PageLoader, {}, [className])}>
      <Loader />
    </div>
  );
};

export default PageLoader;
