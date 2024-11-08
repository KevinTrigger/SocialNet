import { CSSProperties, FC, memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cl from "./Skeleton.module.scss";

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  border?: string;
}

export const Skeleton: FC<SkeletonProps> = memo((props) => {
  const { className, height, border, width } = props;

  const styles: CSSProperties = {
    width,
    height,
    borderRadius: border,
  };

  return (
    <div
      className={classNames(cl.Skeleton, {}, [className])}
      style={styles}
    ></div>
  );
});
