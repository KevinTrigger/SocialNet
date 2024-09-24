import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import cl from "./ProfilePageHeader.module.scss";
import { Text } from "shared/ui/Text/Text";
import Button, { ButtonTheme } from "shared/ui/Button/Button";

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation("profile");

  return (
    <div className={classNames(cl.ProfilePageHeader, {}, [className])}>
      <Text title={t("Профиль")} />
      <Button theme={ButtonTheme.OUTLINE} className={cl.editBtn}>
        {t("Редактировать")}
      </Button>
    </div>
  );
};
