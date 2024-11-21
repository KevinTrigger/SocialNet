import { Fragment, ReactNode } from "react";
import {
  Listbox as HListBox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { classNames } from "shared/lib/classNames/classNames";
import CheckIcon from "../../assets/icons/check.svg?react";
import { Icon } from "../Icon/Icon";
import Button from "../Button/Button";
import { HStack } from "../Stack";
import cl from "./ListBox.module.scss";
import { DropdownDirection } from "../../const/headlessUI";

interface ListBoxItem<T extends string> {
  content: ReactNode;
  value: T;
}

interface ListBoxProps<T extends string> {
  className?: string;
  items?: ListBoxItem<T>[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: T) => void;
  readonly?: boolean;
  label?: string;
  direction?: DropdownDirection;
}

export const ListBox = <T extends string>(props: ListBoxProps<T>) => {
  const {
    className,
    value,
    items,
    readonly,
    defaultValue,
    onChange,
    label,
    direction = "bottom",
  } = props;

  return (
    <HStack gap="8">
      {label && <span>{`${label}>`}</span>}
      <HListBox
        defaultValue={defaultValue}
        as={"div"}
        value={value}
        onChange={onChange}
        className={classNames(cl.listBox, {}, [className])}
      >
        <ListboxButton className={cl.trigger}>
          <Button disabled={readonly} className={cl.button}>
            {value ?? defaultValue}
          </Button>
        </ListboxButton>
        <ListboxOptions anchor={direction} className={cl.options} as="ul">
          {items?.map((item) => (
            <ListboxOption key={item.value} value={item.value} as={Fragment}>
              {({ focus, selected }) => (
                <div
                  aria-disabled={selected}
                  className={classNames(cl.item, {
                    [cl.focus]: focus,
                    [cl.isSelected]: selected,
                  })}
                >
                  {selected && (
                    <Icon Svg={CheckIcon} className={cl.checkIcon} />
                  )}
                  <li>{item.content}</li>
                </div>
              )}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </HListBox>
    </HStack>
  );
};
