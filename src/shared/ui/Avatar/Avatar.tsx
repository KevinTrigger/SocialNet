import { CSSProperties, FC, memo, useMemo } from "react";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import { AppImage } from "../AppImage";
import { Skeleton } from "../Skeleton";
import { Icon, IconTheme } from "../Icon";
import UserFilledIcon from "shared/assets/icons/user-filled.svg?react";
import cl from "./Avatar.module.scss";

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  rounded?: boolean;
  alt?: string;
  fallbackInverted?: boolean;
}

export const Avatar: FC<AvatarProps> = memo((props) => {
  const {
    className,
    src,
    size = 100,
    rounded,
    fallbackInverted,
    alt = "Не удалось загрузить изображение",
  } = props;

  const fallback = <Skeleton width={size} height={size} border="50%" />;
  const errorFallback = (
    <Icon
      theme={fallbackInverted ? IconTheme.INVERTED : IconTheme.PRIMARY}
      Svg={UserFilledIcon}
      width={size}
      height={size}
    />
  );

  const mods: Mods = {
    [cl.rounded]: rounded,
  };

  const styles = useMemo<CSSProperties>(
    () => ({
      width: size,
      height: size,
    }),
    [size]
  );

  return (
    <AppImage
      fallback={fallback}
      errorFallback={errorFallback}
      src={src}
      style={styles}
      alt={alt}
      className={classNames(cl.Avatar, mods, [className])}
    />
  );
});
