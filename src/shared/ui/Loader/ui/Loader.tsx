import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cl from "./Loader.module.scss";

interface LoaderProps {
  className?: string;
}

const Loader: FC<LoaderProps> = ({ className }) => {
  return (
    <div className={classNames("lds-ellipsis", {}, [className])}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
