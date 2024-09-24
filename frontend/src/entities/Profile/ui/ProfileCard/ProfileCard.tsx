import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cl from "./ProfileCard.module.scss";
import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text";
import { Input } from "shared/ui/Input/Input";
import { Profile } from "../../model/types/profile";
import { Loader } from "shared/ui/Loader";

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
        <Input
          value={data?.lastname}
          placeholder="Ваше имя"
          className={cl.input}
        />
        <Input
          value={data?.lastname}
          placeholder="Ваша фамилия"
          className={cl.input}
        />
      </div>
    </div>
  );
};
