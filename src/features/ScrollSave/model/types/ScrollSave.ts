// <Адрес страницы, позиция скролла (number)>
export type ScrollSchema = Record<string, number>;

export interface ScrollSaveSchema {
  scroll: { [key: string]: number };
}