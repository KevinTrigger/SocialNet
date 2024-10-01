import { ChangeEvent, FC, memo, useMemo } from "react";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import cl from "./Select.module.scss";

export interface SelectOptions {
  content: string;
  value: string | number;
}

interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOptions[];
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const Select: FC<SelectProps> = memo((props) => {
  const { className, label, options, value, onChange, readonly } = props;

  const mods: Mods = {};

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

  const optionList = useMemo(() => {
    return options?.map((opt) => (
      <option className={cl.option} value={opt.value}>
        {opt.content}
      </option>
    ));
  }, [options]);

  return (
    <div className={classNames(cl.Wrapper, mods, [className])}>
      {label && <span className={cl.label}>{`${label}>`}</span>}
      <select
        disabled={readonly}
        onChange={onChangeHandler}
        value={value}
        className={cl.select}
      >
        {optionList}
      </select>
    </div>
  );
});
