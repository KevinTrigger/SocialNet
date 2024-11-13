import { FC, useCallback } from "react";
import { Country } from "../../model/types/country";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { ListBox } from "shared/ui/ListBox/ListBox";

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
    <ListBox
      className={classNames("", {}, [className])}
      items={countryList}
      value={value}
      readonly={readonly}
      onChange={onChangeHandler}
      defaultValue={t("Укажите страну")}
      label={t("Страна")}
      direction={"right"}
    />
  );
};
