import { FC, memo } from "react";
import { ArticleCodeBlock } from "../../model/types/article";
import { Code } from "shared/ui/Code/Code";
import cl from "./CodeBlock.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

interface CodeBlockProps {
  className?: string;
  block: ArticleCodeBlock;
}

export const CodeBlock: FC<CodeBlockProps> = memo((props) => {
  const { className, block } = props;

  return (
    <div className={classNames(cl.code, {}, [className])}>
      <Code text={block.code} />
    </div>
  );
});
