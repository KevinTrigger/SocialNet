import { FC } from "react";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import cl from "./CommentCard.module.scss";
import { Comment } from "../../model/types/comment";
import { HStack } from "shared/ui/Stack";
import { Skeleton } from "shared/ui/Skeleton";
import { AppLink } from "shared/ui/AppLink";
import { Avatar } from "shared/ui/Avatar";
import { Text, TextSize } from "shared/ui/Text";
import { getRouteProfile } from "shared/const/router";

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentCard: FC<CommentCardProps> = (props) => {
  const { className, comment, isLoading } = props;

  const mods: Mods = {
    [cl.loading]: isLoading,
  };

  if (isLoading) {
    return (
      <div
        data-testid={"CommentCard.Loading"}
        className={classNames(cl.CommentCard, mods, [className])}
      >
        <HStack className={cl.header}>
          {comment?.user.avatar && (
            <Skeleton width={60} height={60} border={"50%"} />
          )}
          <Skeleton className={cl.username} width={150} height={20} />
        </HStack>
        <Skeleton className={cl.text} width={"100%"} height={50} />
      </div>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <div
      className={classNames(cl.CommentCard, mods, [className])}
      data-testid={"CommentCard.Content"}
    >
      <AppLink className={cl.header} to={getRouteProfile(comment.user.id)}>
        {comment.user.avatar && (
          <Avatar src={comment.user.avatar} rounded size={60} />
        )}
        <Text
          className={cl.username}
          text={comment.user.username}
          size={TextSize.L}
        />
      </AppLink>
      <Text className={cl.text} text={comment.text} />
    </div>
  );
};
