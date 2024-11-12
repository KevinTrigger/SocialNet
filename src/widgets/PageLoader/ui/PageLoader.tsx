import { FC, memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cl from "./PageLoader.module.scss";
import { Loader } from "shared/ui/Loader";
import { HStack } from "shared/ui/Stack";

interface PageLoaderProps {
  className?: string;
}

const PageLoader: FC<PageLoaderProps> = ({ className }) => {
  return (
    <HStack
      justify="center"
      className={classNames(cl.PageLoader, {}, [className])}
    >
      <Loader />
    </HStack>
  );
};

export default memo(PageLoader);
