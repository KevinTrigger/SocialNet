import { FC, useCallback } from "react";
import { Currency } from "../../model/types/currency";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { ListBox } from "shared/ui/ListBox/ListBox";

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

export const CurrencySelect: FC<CurrencySelectProps> = (props) => {
  const { className, value, onChange, readonly } = props;

  const { t } = useTranslation("profile");

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Currency);
    },
    [onChange]
  );

  const currencyList = Object.values(Currency).map((currency) => ({
    content: currency,
    value: currency,
  }));

  return (
    <ListBox
      className={classNames("", {}, [className])}
      readonly={readonly}
      items={currencyList}
      value={value}
      onChange={onChangeHandler}
      defaultValue={t("Укажите валюту")}
      label={t("Валюта")}
      direction={'right'}
    />
  );
};
