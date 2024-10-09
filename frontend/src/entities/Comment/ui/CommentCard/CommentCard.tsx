import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cl from "./CommentCard.module.scss";
import { Comment } from "../../model/types/comment";
import { Avatar, AvatarSize } from "shared/ui/Avatar/Avatar";
import { Text } from "shared/ui/Text/Text";

interface CommentCardProps {
  className?: string;
  comment: Comment;
  isLoading?: boolean;
}

export const CommentCard: FC<CommentCardProps> = (props) => {
  const { className, comment } = props;

  return (
    <div className={classNames(cl.CommentCard, {}, [className])}>
      <div className={cl.authorBlock}>
        <Avatar
          src={
            "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
          }
          rounded
          size={AvatarSize.S}
        />
        <Text className={cl.commentUsername} text={comment.user.username} />
      </div>
      <Text className={cl.commentText} text={comment.text} />
    </div>
  );
};
