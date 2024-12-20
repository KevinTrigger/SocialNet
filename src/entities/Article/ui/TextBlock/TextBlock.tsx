import { FC, memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { ArticleTextBlock } from "../../model/types/article";
import { Text } from "shared/ui/Text";
import cl from "./TextBlock.module.scss";

interface TextBlockProps {
  className?: string;
  block: ArticleTextBlock;
}

export const TextBlock: FC<TextBlockProps> = memo((props) => {
  const { className, block } = props;

  return (
    <div className={classNames(cl.TextBlock, {}, [className])}>
      {block.title && <Text className={cl.title} title={block.title} />}
      {block.paragraphs.map((paragraph) => (
        <Text key={paragraph} className={cl.paragraph} text={paragraph} />
      ))}
    </div>
  );
});
