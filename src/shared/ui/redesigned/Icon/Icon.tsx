import { FC, SVGProps } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cl from "./Icon.module.scss";

type SvgProps = Omit<React.SVGProps<SVGSVGElement>, "onClick">;

interface IconBaseProps extends SvgProps {
  className?: string;
  Svg: FC<SVGProps<SVGSVGElement>>;
}

interface IconClickableProps extends IconBaseProps {
  className?: string;
  Svg: FC<SVGProps<SVGSVGElement>>;
  clickable: true;
  onClick: () => void;
}

interface IconNotClickableProps extends IconBaseProps {
  className?: string;
  Svg: FC<SVGProps<SVGSVGElement>>;
  clickable?: false;
}

type IconProps = IconClickableProps | IconNotClickableProps;

export const Icon: FC<IconProps> = (props) => {
  const {
    className,
    Svg,
    clickable,
    width = 32,
    height = 32,
    ...otherProps
  } = props;

  const icon = (
    <Svg
      {...otherProps}
      className={classNames(cl.Icon, {}, [className])}
      onClick={undefined}
    />
  );

  if (clickable) {
    return (
      <button
        className={cl.button}
        type="button"
        onClick={props.onClick}
        style={{ width, height }}
      >
        {icon}
      </button>
    );
  }

  return icon;
};
