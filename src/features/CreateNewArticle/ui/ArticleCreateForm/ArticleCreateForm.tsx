import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import cl from "./ArticleCreateForm.module.scss";
import { ArticleType } from "entities/Article";
import { VStack } from "shared/ui/deprecated/Stack";
import { Avatar } from "shared/ui/deprecated/Avatar";
import { Input } from "shared/ui/deprecated/Input";
import { Select } from "shared/ui/deprecated/Select";

interface ArticleCreateFormProps {
  className?: string;
}

export const ArticleCreateForm: FC<ArticleCreateFormProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation("");

  const typesOptions = [
    {
      content: t("Айти"),
      value: ArticleType.IT,
    },
    {
      content: t("Экономика"),
      value: ArticleType.ECONOMICS,
    },
    {
      content: t("Наука"),
      value: ArticleType.SCIENCE,
    },
  ];

  return (
    <VStack
      gap="8"
      className={classNames(cl.ArticleCreateForm, {}, [className])}
    >
      <Avatar
        className={cl.articleAvatar}
        src="https://img.lovepik.com/bg/20240105/Download-High-Quality-Construction-Background-Images-Perfect-for-Construction-themed_2734403_wh860.jpg!/fw/860"
      />
      <Input className={cl.input} placeholder={t("Ссылка на изображение")} />
      <Input className={cl.input} placeholder={t("Название")} />
      <Input className={cl.input} placeholder={t("Подзаголовок")} />
      <Input className={cl.input} placeholder={t("Подзаголовок")} />
      <Select label={t("Укажите тип статьи")} options={typesOptions} />
    </VStack>
  );
};
