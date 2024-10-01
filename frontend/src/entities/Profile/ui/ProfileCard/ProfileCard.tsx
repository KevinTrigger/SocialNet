import { FC } from "react";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text";
import { Input } from "shared/ui/Input/Input";
import { Profile } from "../../model/types/profile";
import { Loader } from "shared/ui/Loader";
import cl from "./ProfileCard.module.scss";
import { Avatar, AvatarSize } from "shared/ui/Avatar/Avatar";
import { Currency, CurrencySelect } from "entities/Currency";
import { Country, CountrySelect } from "entities/Country";
import { useTranslation } from "react-i18next";

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  onChangeFirstname?: (value?: string) => void;
  onChangeLastname?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeCountry?: (value?: Country) => void;
  onChangeCurrency?: (value: Currency) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
  const {
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeCountry,
    onChangeCurrency,
    onChangeAvatar,
    onChangeUsername,
  } = props;

  const { t } = useTranslation("profile");

  if (isLoading) {
    return (
      <div
        className={classNames(cl.ProfileCard, { [cl.loading]: true }, [
          className,
        ])}
      >
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(cl.ProfileCard, {}, [className, cl.error])}>
        <Text
          theme={TextTheme.ERROR}
          align={TextAlign.CENTER}
          title={t("Произошла ошибка при загрузке файлов")}
          text={t("Попробуйте перезагрузить страницу")}
        />
      </div>
    );
  }

  const mods: Mods = {
    [cl.editing]: !readonly,
  };

  return (
    <div className={classNames(cl.ProfileCard, mods, [className])}>
      <div className={cl.data}>
        {data?.avatar && (
          <div className={cl.avatarWrap}>
            <Avatar
              src={data?.avatar}
              size={AvatarSize.XL}
              rounded
              alt={t("Изображение пользователя")}
            />
          </div>
        )}

        <Input
          value={data?.avatar}
          placeholder={t("Ссылка на аватар")}
          className={cl.input}
          onChange={onChangeAvatar}
          readonly={readonly}
        />
        <Input
          value={data?.username}
          placeholder={t("Никнейм")}
          className={cl.input}
          onChange={onChangeUsername}
          readonly={readonly}
        />
        <Input
          value={data?.firstname}
          placeholder={t("Имя")}
          className={cl.input}
          onChange={onChangeFirstname}
          readonly={readonly}
        />
        <Input
          value={data?.lastname}
          placeholder={t("Фамилия")}
          className={cl.input}
          onChange={onChangeLastname}
          readonly={readonly}
        />
        <Input
          value={data?.age}
          placeholder={t("Возраст")}
          className={cl.input}
          onChange={onChangeAge}
          readonly={readonly}
          isNumber
        />
        <CountrySelect
          value={data?.country}
          className={cl.input}
          onChange={onChangeCountry}
          readonly={readonly}
        />
        <Input
          value={data?.city}
          placeholder={t("Город")}
          className={cl.input}
          onChange={onChangeCity}
          readonly={readonly}
        />
        <CurrencySelect
          value={data?.currency}
          onChange={onChangeCurrency}
          className={cl.input}
          readonly={readonly}
        />
      </div>
    </div>
  );
};
