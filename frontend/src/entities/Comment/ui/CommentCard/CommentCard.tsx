import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cl from "./CommentCard.module.scss";
import { Comment } from "../../model/types/comment";
import { Avatar, AvatarSize } from "shared/ui/Avatar/Avatar";
import { Text, TextSize } from "shared/ui/Text/Text";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import AppLink from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

interface CommentCardProps {
  className?: string;
  comment: Comment;
  isLoading?: boolean;
}

export const CommentCard: FC<CommentCardProps> = (props) => {
  const { className, comment, isLoading } = props;

  if (isLoading) {
    return (
      <div className={classNames(cl.CommentCard, {}, [className])}>
        <div className={cl.authorBlock}>
          {comment.user.avatar && (
            <Skeleton width={60} height={60} border={"50%"} />
          )}
          <Skeleton className={cl.commentUsername} width={150} height={20} />
        </div>
        <Skeleton className={cl.commentText} width={"100%"} height={50} />
      </div>
    );
  }

  return (
    <div className={classNames(cl.CommentCard, {}, [className])}>
      <AppLink
        className={cl.authorBlock}
        to={`${RoutePath.profile + comment.user.id}`}
      >
        {comment.user.avatar && (
          <Avatar src={comment.user.avatar} rounded size={AvatarSize.S} />
        )}
        <Text className={cl.commentUsername} text={comment.user.username} size={TextSize.L} />
      </AppLink>
      <Text className={cl.commentText} text={comment.text} />
    </div>
  );
};
