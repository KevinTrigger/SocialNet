import { FC, FunctionComponent, ReactNode, SVGProps } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { classNames } from "shared/lib/classNames/classNames";
import { PopupDirection } from "../../const/popup";
import { HStack } from "shared/ui/Stack";
import { Button, ButtonTheme } from "shared/ui/Button";
import { Icon } from "shared/ui/Icon";
import { AppLink } from "shared/ui/AppLink";
import cl from "./Dropdown.module.scss";

export interface DropdownItem {
  label: string;
  onClick?: () => void;
  icon?: FunctionComponent<SVGProps<SVGSVGElement>>;
  href?: string;
  disabled?: boolean;
}

interface DropdownProps {
  className?: string;
  trigger?: ReactNode;
  items?: DropdownItem[];
  direction?: PopupDirection;
}

export const Dropdown: FC<DropdownProps> = (props) => {
  const { className, trigger, items, direction = "bottom" } = props;

  const menuItem = (item: DropdownItem) => {
    const content = ({ active }: { active: boolean }) => (
      <HStack
        key={item.label}
        gap="8"
        className={classNames(cl.item, { [cl.active]: active })}
      >
        {item.icon && <Icon className={cl.icon} Svg={item.icon} />}
        <Button theme={ButtonTheme.CLEAR}>{item.label}</Button>
      </HStack>
    );

    if (item.href) {
      return (
        <MenuItem
          as={AppLink}
          to={item.href}
          key={item.label}
          disabled={item.disabled}
          onClick={item.onClick}
        >
          {content}
        </MenuItem>
      );
    }

    if (item.onClick) {
      return (
        <MenuItem
          key={item.label}
          onClick={item.onClick}
          as={"div"}
          disabled={item.disabled}
        >
          {content}
        </MenuItem>
      );
    }
  };

  return (
    <Menu as="div" className={classNames(cl.Dropdown, {}, [className])}>
      <MenuButton className={cl.trigger}>
        <Button theme={ButtonTheme.CLEAR}>{trigger}</Button>
      </MenuButton>

      <MenuItems className={cl.options} as="ul" transition anchor={direction}>
        {items?.map(menuItem)}
      </MenuItems>
    </Menu>
  );
};
