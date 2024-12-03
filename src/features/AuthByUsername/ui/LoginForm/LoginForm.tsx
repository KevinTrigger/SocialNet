import { memo, useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { getLoginUsername } from "features/AuthByUsername/model/selectors/getLoginUsername/getLoginUsername";
import { getLoginPassword } from "features/AuthByUsername/model/selectors/getLoginPassword/getLoginPassword";
import { getLoginError } from "features/AuthByUsername/model/selectors/getLoginError/getLoginError";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import cl from "./LoginForm.module.scss";
import { VStack } from "shared/ui/Stack";
import { Text, TextTheme } from "shared/ui/Text";
import { Input } from "shared/ui/Input";
import { Button, ButtonTheme } from "shared/ui/Button";

export interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm = (props: LoginFormProps) => {
  const { className, onSuccess } = props;
  const { t } = useTranslation("translation");

  const dispatch = useAppDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const error = useSelector(getLoginError);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));
    if (result.meta.requestStatus === "fulfilled") {
      onSuccess();
    }
  }, [onSuccess, dispatch, password, username]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <VStack className={classNames(cl.LoginForm, {}, [className])}>
        <Text title={t("Авторизация")} />
        {error && <Text theme={TextTheme.ERROR} text={error} />}
        <Input
          className={cl.input}
          placeholder={t("Введите логин")}
          autoFocus
          onChange={onChangeUsername}
          value={username}
        />
        <Input
          className={cl.input}
          placeholder={t("Введите пароль")}
          onChange={onChangePassword}
          value={password}
        />
        <Button
          className={cl.loginBtn}
          theme={ButtonTheme.OUTLINE}
          onClick={onLoginClick}
        >
          {t("Войти")}
        </Button>
      </VStack>
    </DynamicModuleLoader>
  );
};

export default memo(LoginForm);
