import { FC, useCallback } from "react";
import { Country } from "../../model/types/country";
import { classNames } from "shared/lib/classNames/classNames";
import { Select } from "shared/ui/Select/Select";
import { useTranslation } from "react-i18next";

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

export const CountrySelect: FC<CountrySelectProps> = (props) => {
  const { className, value, onChange, readonly } = props;
  const { t } = useTranslation("profile");

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Country);
    },
    [onChange]
  );

  const countryList = Object.values(Country).map((country) => ({
    content: country,
    value: country,
  }));

  return (
    <Select
      className={classNames("", {}, [className])}
      readonly={readonly}
      options={countryList}
      value={value}
      onChange={onChangeHandler}
      label={t("Страна")}
    />
  );
};
