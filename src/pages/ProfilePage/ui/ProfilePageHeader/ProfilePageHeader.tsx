import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Text } from "shared/ui/Text/Text";
import Button, { ButtonTheme } from "shared/ui/Button/Button";
import { useSelector } from "react-redux";
import {
  getProfileForm,
  getProfileReadonly,
  profileActions,
} from "entities/Profile";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { updateProfileData } from "entities/Profile/model/services/updateProfileData/updateProfileData";
import { getUserAuthData } from "entities/User";
import { HStack } from "shared/ui/Stack/HStack/HStack";

export const ProfilePageHeader = () => {
  const { t } = useTranslation("profile");
  const dispatch = useAppDispatch();
  const readonly = useSelector(getProfileReadonly);
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileForm);

  const canEdit = authData?.id === profileData?.id;

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
    <HStack justify="between">
      <Text title={t("Профиль")} />
      {canEdit && (
        <>
          {!readonly ? (
            <HStack gap="16">
              <Button onClick={onCancelEdit} theme={ButtonTheme.OUTLINE_RED}>
                {t("Отменить")}
              </Button>
              <Button theme={ButtonTheme.OUTLINE} onClick={onSave}>
                {t("Сохранить")}
              </Button>
            </HStack>
          ) : (
            <Button onClick={onEdit} theme={ButtonTheme.OUTLINE}>
              {t("Редактировать")}
            </Button>
          )}
        </>
      )}
    </HStack>
  );
};
