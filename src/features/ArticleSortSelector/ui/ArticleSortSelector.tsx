import { FC, useMemo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { ArticlesSortField } from "entities/Article";
import { SortOrder } from "shared/types/sort";
import cl from "./ArticleSortSelector.module.scss";
import { Select, SelectOptions } from "shared/ui/deprecated/Select";
import { HStack } from "shared/ui/deprecated/Stack";

interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticlesSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (sort: ArticlesSortField) => void;
}

export const ArticleSortSelector: FC<ArticleSortSelectorProps> = (props) => {
  const { className, sort, order, onChangeOrder, onChangeSort } = props;

  const sortOptions = useMemo<SelectOptions<SortOrder>[]>(
    () => [
      {
        value: "asc",
        content: "возрастанию",
      },
      {
        value: "desc",
        content: "убыванию",
      },
    ],
    []
  );

  const sortFieldOptions = useMemo<SelectOptions<ArticlesSortField>[]>(
    () => [
      {
        value: ArticlesSortField.CREATED,
        content: "дате создания",
      },
      {
        value: ArticlesSortField.TITLE,
        content: "названию",
      },
      {
        value: ArticlesSortField.VIEWS,
        content: "просмотрам",
      },
    ],
    []
  );

  return (
    <HStack gap="8" className={classNames("", {}, [className])}>
      <Select<ArticlesSortField>
        className={cl.select}
        value={sort}
        onChange={onChangeSort}
        label="Сортировать ПО"
        options={sortFieldOptions}
      />
      <Select<SortOrder>
        className={cl.select}
        value={order}
        onChange={onChangeOrder}
        label="по"
        options={sortOptions}
      />
    </HStack>
  );
};
