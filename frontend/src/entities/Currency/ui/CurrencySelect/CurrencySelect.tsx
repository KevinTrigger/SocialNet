import { FC, useCallback } from "react";
import { Currency } from "../../model/types/currency";
import { classNames } from "shared/lib/classNames/classNames";
import { Select } from "shared/ui/Select/Select";

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

export const CurrencySelect: FC<CurrencySelectProps> = (props) => {
  const { className, value, onChange, readonly } = props;

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Currency);
    },
    [onChange]
  );

  // Преобразование из перечисления в массив валют
  const currencyList = Object.values(Currency).map((currency) => ({
    content: currency,
    value: currency,
  }));

  return (
    <Select
      className={classNames("", {}, [className])}
      readonly={readonly}
      options={currencyList}
      value={value}
      onChange={onChangeHandler}
      label={"Валюта"}
    />
  );
};
