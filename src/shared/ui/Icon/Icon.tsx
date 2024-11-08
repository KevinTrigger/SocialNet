import { FC, SVGProps } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cl from "./Icon.module.scss";

interface IconProps {
  className?: string;
  Svg: FC<SVGProps<SVGSVGElement>>;
}

export const Icon: FC<IconProps> = (props) => {
  const { className, Svg } = props;

  return <Svg className={classNames(cl.Icon, {}, [className])} />;
};
