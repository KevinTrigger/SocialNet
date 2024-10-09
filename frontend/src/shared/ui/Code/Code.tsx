import { FC, useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cl from "./Code.module.scss";
import { Icon } from "../Icon/Icon";
import CopyIcon from "shared/assets/icons/copy.svg?react";
import Button, { ButtonTheme } from "shared/ui/Button/Button";

interface CodeProps {
  className?: string;
  text: string;
}

export const Code: FC<CodeProps> = (props) => {
  const { className, text } = props;

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={cl.CodeWrapper}>
      <code className={classNames(cl.code, {}, [className])}>{text}</code>
      <Button className={cl.btnCopy} theme={ButtonTheme.CLEAR} onClick={onCopy}>
        <Icon Svg={CopyIcon} className={cl.iconCopy} />
      </Button>
    </pre>
  );
};
