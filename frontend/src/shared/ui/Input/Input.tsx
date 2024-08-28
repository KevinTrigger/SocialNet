import { ChangeEvent, FC, InputHTMLAttributes } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cl from "./Input.module.scss";

export enum InputTheme {
  CLEAR = "clear",
  CLEAR_INVERTED = "clearInverted",
  OUTLINE = "outline",
}

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "onChange" | "value"
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: string;
}

export const Input: FC<InputProps> = (props) => {
  const {
    className,
    value,
    onChange,
    type = "text",
    placeholder,
    ...otherProps
  } = props;

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={classNames(cl.InputWrapper, {}, [className])}>
      {!placeholder || (
        <div className={cl.inputPlaceholder}>
          {`${placeholder}>`}
        </div>
      )}
      <input
        className={cl.input}
        type={type}
        value={value}
        onChange={handleChangeValue}
        {...otherProps}
      />
    </div>
  );
};
