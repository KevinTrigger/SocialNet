import {
  ChangeEvent,
  FC,
  InputHTMLAttributes,
  memo,
  useEffect,
  useRef,
  useState,
} from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cl from "./Input.module.scss";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "onChange" | "value" | "readonly"
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  autoFocus?: boolean;
  readonly?: boolean;
  isNumber?: boolean;
}

export const Input: FC<InputProps> = memo((props) => {
  const {
    className,
    value,
    onChange,
    isNumber,
    type = isNumber ? "number" : "text",
    placeholder,
    autoFocus = false,
    readonly,
    ...otherProps
  } = props;

  const [_, setIsFocused] = useState(false);
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
        readOnly={readonly}
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
});
