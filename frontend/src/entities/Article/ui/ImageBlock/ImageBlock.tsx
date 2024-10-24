import { FC, memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { ArticleImageBlock } from "../../model/types/article";
import { Text, TextAlign } from "shared/ui/Text/Text";
import cl from "./ImageBlock.module.scss";

interface ImageBlockProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ImageBlock: FC<ImageBlockProps> = memo((props) => {
  const { className, block } = props;

  return (
    <div className={classNames(cl.ImageBlock, {}, [className])}>
      <img className={cl.img} src={block.src} alt={block.title} />
      {block.title && <Text text={block.title} align={TextAlign.CENTER} />}
    </div>
  );
});