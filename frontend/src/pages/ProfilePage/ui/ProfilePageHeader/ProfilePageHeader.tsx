import { FC, useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import cl from "./ProfilePageHeader.module.scss";
import { Text } from "shared/ui/Text/Text";
import Button, { ButtonTheme } from "shared/ui/Button/Button";
import { useSelector } from "react-redux";
import { getProfileReadonly, profileActions } from "entities/Profile";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { updateProfileData } from "entities/Profile/model/services/updateProfileData/updateProfileData";

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation("profile");
  const dispatch = useAppDispatch();
  const readonly = useSelector(getProfileReadonly);

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(cl.ProfilePageHeader, {}, [className])}>
      <Text title={t("Профиль")} />

      {!readonly ? (
        <div className={cl.editModeWrap}>
          <Button
            onClick={onCancelEdit}
            theme={ButtonTheme.OUTLINE_RED}
            className={cl.cancelBtn}
          >
            {t("Отменить")}
          </Button>
          <Button
            theme={ButtonTheme.OUTLINE}
            className={cl.editBtn}
            onClick={onSave}
          >
            {t("Сохранить")}
          </Button>
        </div>
      ) : (
        <Button
          onClick={onEdit}
          theme={ButtonTheme.OUTLINE}
          className={cl.editBtn}
        >
          {t("Редактировать")}
        </Button>
      )}
    </div>
  );
};
