import { FC, memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { HStack } from "shared/ui/deprecated/Stack";
import { Loader } from "shared/ui/deprecated/Loader";
import cl from "./PageLoader.module.scss";

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
