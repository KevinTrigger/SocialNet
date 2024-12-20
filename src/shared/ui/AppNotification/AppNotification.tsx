import { FC, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Text, TextTheme } from "../Text";
import { Button } from "../Button";
import { VStack } from "../Stack";
import cl from "./AppNotification.module.scss";

interface AppNotificationProps {
  className?: string;
  title?: string;
  text?: string;
  withOk?: boolean;
}

export const AppNotification: FC<AppNotificationProps> = (props) => {
  const {
    className,
    title = "Модуль находится на стадии разработки",
    text = "Сейчас разработчик отдыхает",
    withOk = true,
  } = props;

  const [isOpen, setIsOpen] = useState(true);

  const onClose = () => setIsOpen(false);

  if (!withOk || !isOpen) return null;

  return (
    <VStack gap="8" className={classNames(cl.AppNotification, {}, [className])}>
      <Text
        theme={TextTheme.INVERTED}
        title={title ?? title}
        text={text ?? text}
      />
      {withOk && (
        <Button onClick={onClose} className={cl.btn}>
          ОК
        </Button>
      )}
    </VStack>
  );
};
