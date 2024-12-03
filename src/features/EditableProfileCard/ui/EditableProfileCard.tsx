import { FC, useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { ProfileCard } from "entities/Profile";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import { getProfileForm } from "../model/selectors/getProfileForm/getProfileForm";
import { getProfileIsLoading } from "../model/selectors/getProfileIsLoading/getProfileIsLoading";
import { getProfileError } from "../model/selectors/getProfileError/getProfileError";
import { getProfileReadonly } from "../model/selectors/getProfileReadonly/getProfileReadonly";
import { getProfileValidateErrors } from "../model/selectors/getProfileValidateErrors/getProfileValidateErrors";
import { profileActions, profileReducer } from "../model/slice/profileSlice";
import { fetchProfileData } from "../model/services/fetchProfileData/fetchProfileData";
import { ValidateProfileError } from "../model/types/editableProfileCard";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { EditableProfileCardHeader } from "./EditableProfileCardHeader";
import { Text, TextTheme } from "shared/ui/Text";

interface EditableProfileCardProps {
  className?: string;
  id: string;
}

export const EditableProfileCard: FC<EditableProfileCardProps> = (props) => {
  const { className, id } = props;
  const dispatch = useAppDispatch();
  const { t } = useTranslation("profile");
  const form = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateErrors);

  const reducers: ReducersList = {
    profile: profileReducer,
  };

  const onChangeFirstname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ firstname: value || "" }));
    },
    [dispatch]
  );

  const onChangeLastname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ lastname: value || "" }));
    },
    [dispatch]
  );

  const onChangeAge = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
    },
    [dispatch]
  );

  const onChangeCountry = useCallback(
    (value?: Country) => {
      dispatch(profileActions.updateProfile({ country: value }));
    },
    [dispatch]
  );

  const onChangeCurrency = useCallback(
    (value: Currency) => {
      dispatch(profileActions.updateProfile({ currency: value }));
    },
    [dispatch]
  );

  const onChangeCity = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ city: value }));
    },
    [dispatch]
  );

  const onChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ avatar: value || "" }));
    },
    [dispatch]
  );

  const onChangeUsername = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ username: value || "" }));
    },
    [dispatch]
  );

  const getValidateErrors = () => {
    if (validateErrors?.length) {
      return validateErrors.map((error) => (
        <Text
          data-testid="EditableProfileCard.Error"
          theme={TextTheme.ERROR}
          text={validateErrorTranslates[error]}
          key={error}
        />
      ));
    }
  };

  const validateErrorTranslates = {
    [ValidateProfileError.INCORRECT_USER_FIRSTNAME]: t("Неверно указано имя"),
    [ValidateProfileError.INCORRECT_USER_LASTNAME]: t(
      "Неверно указана фамилия"
    ),
    [ValidateProfileError.INCORRECT_USER_USERNAME]: t("Неверно указан никнейм"),
    [ValidateProfileError.INCORRECT_CHARACTERS]: t(
      "Имя и фамилия не могут содержить числа"
    ),
    [ValidateProfileError.INCORRECT_USER_AGE]: t("Неверно указан возраст"),
    [ValidateProfileError.INCORRECT_USER_COUNTRY]: t("Неверно указана страна"),
    [ValidateProfileError.NO_DATA]: t("Данные отсутствуют"),
    [ValidateProfileError.SERVER_ERROR]: t("Ошибка сервера"),
    [ValidateProfileError.INCORRECT_USER_AVATAR]: t(
      "Неверный путь изображения"
    ),
  };

  useEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
  }, [dispatch, id]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={className}>
        <EditableProfileCardHeader />
        {getValidateErrors()}
        <ProfileCard
          data={form}
          isLoading={isLoading}
          error={error}
          readonly={readonly}
          onChangeFirstname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          onChangeAge={onChangeAge}
          onChangeCountry={onChangeCountry}
          onChangeCurrency={onChangeCurrency}
          onChangeCity={onChangeCity}
          onChangeAvatar={onChangeAvatar}
          onChangeUsername={onChangeUsername}
        />
      </div>
    </DynamicModuleLoader>
  );
};
