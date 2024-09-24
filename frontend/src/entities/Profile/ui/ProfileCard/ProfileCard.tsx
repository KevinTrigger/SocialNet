import { FC, useEffect } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import cl from "./ProfileCard.module.scss";
import { useSelector } from "react-redux";
import { getProfileData } from "entities/Profile/model/selectors/getProfileData/getProfileData";
import { Text } from "shared/ui/Text/Text";
import Button, { ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation("profile");

  const data = useSelector(getProfileData);

  useEffect(() => {
    console.log(data);
  }, [data])

  return (
    <div className={classNames(cl.ProfileCard, {}, [className])}>
      <div className={cl.header}>
        <Text title={t("Профиль")} />
        <Button theme={ButtonTheme.OUTLINE} className={cl.editBtn}>
          {t("Редактировать")}
        </Button>
      </div>
      <div className={cl.data}>
        <Input
          value={data?.username}
          placeholder="Ваше имя"
          className={cl.input}
        />
        <Input
          value={data?.lastname}
          placeholder="Ваша фамилия"
          className={cl.input}
        />
      </div>
    </div>
  );
};
