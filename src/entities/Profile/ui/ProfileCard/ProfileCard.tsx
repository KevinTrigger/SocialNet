import { FC } from "react";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import { Currency, CurrencySelect } from "entities/Currency";
import { Country, CountrySelect } from "entities/Country";
import { useTranslation } from "react-i18next";
import { Profile } from "../../model/types/profile";
import cl from "./ProfileCard.module.scss";
import { HStack, VStack } from "shared/ui/Stack";
import { Skeleton } from "shared/ui/Skeleton";
import { Text, TextAlign, TextTheme } from "shared/ui/Text";
import { Avatar, AvatarSize } from "shared/ui/Avatar";
import { Input } from "shared/ui/Input";

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
      <div className={classNames(cl.ProfileCard, {}, [className])}>
        <VStack className={cl.skeleton_wrap}>
          <Skeleton
            className={cl.skeleton_avatar}
            width={180}
            height={180}
            border={"50%"}
          />
          <Skeleton className={cl.skeleton} width={400} height={335} />
        </VStack>
      </div>
    );
  }

  if (error) {
    return (
      <HStack
        justify="center"
        className={classNames(cl.ProfileCard, {}, [className, cl.error])}
      >
        <Text
          theme={TextTheme.ERROR}
          align={TextAlign.CENTER}
          title={t("Произошла ошибка при загрузке файлов")}
          text={t("Попробуйте перезагрузить страницу")}
        />
      </HStack>
    );
  }

  const mods: Mods = {
    [cl.editing]: !readonly,
  };

  return (
    <div className={classNames(cl.ProfileCard, mods, [className])}>
      <VStack gap="16">
        {data?.avatar && (
          <HStack justify="center" className={cl.avatarWrap}>
            <Avatar
              src={data?.avatar}
              size={AvatarSize.XL}
              rounded
              alt={t("Изображение пользователя")}
            />
          </HStack>
        )}

        <Input
          value={data?.avatar}
          placeholder={t("Ссылка на аватар")}
          onChange={onChangeAvatar}
          readonly={readonly}
        />
        <Input
          value={data?.username}
          placeholder={t("Никнейм")}
          onChange={onChangeUsername}
          readonly={readonly}
        />
        <Input
          data-testid="ProfileCard.Firstname"
          value={data?.firstname}
          placeholder={t("Имя")}
          onChange={onChangeFirstname}
          readonly={readonly}
        />
        <Input
          data-testid="ProfileCard.Lastname"
          value={data?.lastname}
          placeholder={t("Фамилия")}
          onChange={onChangeLastname}
          readonly={readonly}
        />
        <Input
          value={data?.age}
          placeholder={t("Возраст")}
          onChange={onChangeAge}
          readonly={readonly}
          isNumber
        />
        <CountrySelect
          value={data?.country}
          onChange={onChangeCountry}
          readonly={readonly}
        />
        <Input
          value={data?.city}
          placeholder={t("Город")}
          onChange={onChangeCity}
          readonly={readonly}
        />
        <CurrencySelect
          value={data?.currency}
          onChange={onChangeCurrency}
          readonly={readonly}
        />
      </VStack>
    </div>
  );
};
