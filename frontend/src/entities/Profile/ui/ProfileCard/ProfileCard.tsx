import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text";
import { Input } from "shared/ui/Input/Input";
import { Profile } from "../../model/types/profile";
import { Loader } from "shared/ui/Loader";
import cl from "./ProfileCard.module.scss";

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
  const { className, data, isLoading, error } = props;

  if (isLoading) {
    return (
      <div
        className={classNames(cl.ProfileCard, { [cl.loading]: true }, [
          className,
        ])}
      >
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(cl.ProfileCard, {}, [className, cl.error])}>
        <Text
          theme={TextTheme.ERROR}
          align={TextAlign.CENTER}
          title="Произошла ошибка при загрузке файлов"
          text="Попробуйте перезагрузить страницу"
        />
      </div>
    );
  }

  return (
    <div className={classNames(cl.ProfileCard, {}, [className])}>
      <div className={cl.data}>
        <img src={data?.avatar} alt="Avatar" width={150} height={120} />
        <Input value={data?.firstname} placeholder="Имя" className={cl.input} />
        <Input
          value={data?.lastname}
          placeholder="Фамилия"
          className={cl.input}
        />
        <Input
          value={`${data?.age}`}
          placeholder="Возраст"
          className={cl.input}
        />
        <Input value={data?.country} placeholder="Страна" className={cl.input} />
        <Input value={data?.city} placeholder="Город" className={cl.input} />
        <Input value={data?.currency} placeholder="Валюта" className={cl.input} />
      </div>
    </div>
  );
};
