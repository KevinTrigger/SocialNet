import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import "./PageLoader.scss";
import { Loader } from "shared/ui/Loader";

interface PageLoaderProps {
  className?: string;
}

const PageLoader: FC<PageLoaderProps> = ({ className }) => {
  return (
    <div className={classNames('page__loader', {}, [className])}>
      <Loader />
    </div>
  );
};

export default PageLoader;
