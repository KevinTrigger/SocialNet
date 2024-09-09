import { FC, memo, useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import cl from "./LoginForm.module.scss";
import Button, { ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../../model/slice/loginSlice";
import { getLoginState } from "../../model/selectors/getLoginState/getLoginState";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = memo((props) => {
  const { className } = props;
  const { t } = useTranslation("translation");

  const dispatch = useDispatch();
  const { username, password, isLoading, error } = useSelector(getLoginState);

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

  const onLoginClick = useCallback(() => {
    // dispatch(loginByUsername({ username, password }));
}, [dispatch, password, username]);

  return (
    <div className={classNames(cl.LoginForm, {}, [className])}>
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
    </div>
  );
});
