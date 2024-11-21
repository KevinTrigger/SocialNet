import { FC, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { HStack } from "shared/ui/Stack";
import { Text } from "shared/ui/Text/Text";
import Button, { ButtonTheme } from "shared/ui/Button/Button";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { getProfileReadonly } from "../model/selectors/getProfileReadonly/getProfileReadonly";
import { getUserAuthData } from "entities/User";
import { getProfileForm } from "../model/selectors/getProfileForm/getProfileForm";
import { profileActions } from "../model/slice/profileSlice";
import { updateProfileData } from "../model/services/updateProfileData/updateProfileData";

interface EditableProfileCardHeaderProps {
  className?: string;
}

export const EditableProfileCardHeader: FC<EditableProfileCardHeaderProps> = (
  props
) => {
  const { className } = props;
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
    <HStack className={className} justify="between">
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
