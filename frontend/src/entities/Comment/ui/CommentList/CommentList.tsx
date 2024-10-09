import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cl from "./CommentList.module.scss";
import { CommentCard } from "../CommentCard/CommentCard";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { Comment } from "../../model/types/comment";

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
  error?: string;
}

export const CommentList: FC<CommentListProps> = (props) => {
  const { className, comments, error, isLoading } = props;

  if (error) {
    return (
      <Text theme={TextTheme.ERROR} text="Не удалось загрузить комментарии" />
    );
  }

  if (isLoading) {
    return (
      <Text text={'Загрузка..'} />
    )
  }

  return (
    <div className={classNames(cl.CommentList, {}, [className])}>
      {!comments?.length ? (
        <Text text={"Комментарии отсутствуют"} />
      ) : (
        comments?.map((comment) => <CommentCard className={cl.comment} comment={comment} />)
      )}
    </div>
  );
};
