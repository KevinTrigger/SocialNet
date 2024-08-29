import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import cl from "./LoginForm.module.scss";
import Button from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation("translation");

  return (
    <div className={classNames(cl.LoginForm, {}, [className])}>
      <Input className={cl.input} placeholder={t("Введите логин")} autoFocus />
      <Input className={cl.input} placeholder={t("Введите пароль")} />
      <Button className={cl.loginBtn}>{t("Войти")}</Button>
    </div>
  );
};
