import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cl from "./CommentList.module.scss";
import { CommentCard } from "../CommentCard/CommentCard";
import { Comment } from "../../model/types/comment";
import { Text } from "shared/ui/deprecated/Text";

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList: FC<CommentListProps> = (props) => {
  const { className, comments, isLoading } = props;

  if (isLoading) {
    return (
      <div className={classNames(cl.CommentList, {}, [className])}>
        {comments?.map((comment) => (
          <CommentCard
            key={comment.id}
            isLoading={isLoading}
            className={cl.comment}
            comment={comment}
          />
        ))}
      </div>
    );
  }

  return (
    <div className={classNames(cl.CommentList, {}, [className])}>
      {!comments?.length ? (
        <Text text={"Комментарии отсутствуют"} />
      ) : (
        comments?.map((comment) => (
          <CommentCard
            key={comment.id}
            isLoading={isLoading}
            className={cl.comment}
            comment={comment}
          />
        ))
      )}
    </div>
  );
};
