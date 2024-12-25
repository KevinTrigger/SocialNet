import { ChangeEvent, useMemo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cl from "./Select.module.scss";

export interface SelectOptions<T extends string> {
  content: string;
  value: T;
}

interface SelectProps<T extends string> {
  className?: string;
  label?: string;
  options?: SelectOptions<T>[];
  value?: string;
  onChange?: (value: T) => void;
  readonly?: boolean;
}

/**
 * @deprecated
 */

export const Select = <T extends string>(props: SelectProps<T>) => {
  const { className, label, options, value, onChange, readonly } = props;

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value as T);
  };

  const optionList = useMemo(() => {
    return options?.map((opt) => (
      <option key={opt.value} className={cl.option} value={opt.value}>
        {opt.content}
      </option>
    ));
  }, [options]);

  return (
    <div className={classNames(cl.Wrapper, {}, [className])}>
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
};
