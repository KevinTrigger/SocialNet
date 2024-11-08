import { FC, memo } from "react";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import cl from "./Avatar.module.scss";

export enum AvatarSize {
  XS = "size_xs",
  S = "size_s",
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
  XXL = "size_xxl",
}

interface AvatarProps {
  className?: string;
  src?: string;
  size?: AvatarSize;
  rounded?: boolean;
  alt?: string;
}

export const Avatar: FC<AvatarProps> = memo((props) => {
  const {
    className,
    src,
    size = AvatarSize.M,
    rounded,
    alt = "Не удалось загрузить изображение",
  } = props;

  const mods: Mods = {
    [cl[size]]: true,
    [cl.rounded]: rounded,
  };

  return (
    <img
      src={src}
      className={classNames(cl.Avatar, mods, [className])}
      alt={alt}
    />
  );
});
