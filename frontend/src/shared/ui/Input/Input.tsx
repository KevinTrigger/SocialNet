import {
  ChangeEvent,
  FC,
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";
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
  autoFocus?: boolean;
}

export const Input: FC<InputProps> = (props) => {
  const {
    className,
    value,
    onChange,
    type = "text",
    placeholder,
    autoFocus = false,
    ...otherProps
  } = props;

  const [isFocused, setIsFocused] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  useEffect(() => {
    if (autoFocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autoFocus]);

  return (
    <div className={classNames(cl.InputWrapper, {}, [className])}>
      {!placeholder || (
        <div className={cl.inputPlaceholder}>{`${placeholder}>`}</div>
      )}
      <input
        ref={ref}
        onFocus={onFocus}
        onBlur={onBlur}
        className={cl.input}
        type={type}
        value={value}
        onChange={handleChangeValue}
        {...otherProps}
      />
    </div>
  );
};