import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cl from "./CommentList.module.scss";
import { CommentCard } from "../CommentCard/CommentCard";
import { Text } from "shared/ui/Text/Text";
import { Comment } from "../../model/types/comment";

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList: FC<CommentListProps> = (props) => {
  const { className, comments, isLoading } = props;

  console.log(comments, " comments");

  if (isLoading) {
    return comments?.map((comment) => (
      <CommentCard
        key={comment.id}
        isLoading={isLoading}
        className={cl.comment}
        comment={comment}
      />
    ));
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
