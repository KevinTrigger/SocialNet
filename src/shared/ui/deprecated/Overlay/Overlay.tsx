import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cl from "./Overlay.module.scss";

interface OverlayProps {
  className?: string;
  onClick?: () => void;
}

/**
 * @deprecated
 */

export const Overlay: FC<OverlayProps> = (props) => {
  const { className, onClick } = props;

  return (
    <div
      onClick={onClick}
      className={classNames(cl.Overlay, {}, [className])}
    />
  );
};
