import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import cl from "./LoginForm.module.scss";
import Button from "shared/ui/Button/Button";

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation("");

  return (
    <div className={classNames(cl.LoginForm, {}, [className])}>
      <input className={cl.input} type="text" placeholder="login" />
      <input className={cl.input} type="text" placeholder="password" />
      <Button className={cl.loginBtn}>Войти</Button>
    </div>
  );
};
