import { FC, ReactNode } from "react";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { PopupDirection } from "../../const/popup";

interface PopupProps {
  className?: string;
  children: ReactNode;
  trigger?: ReactNode;
  direction?: PopupDirection;
}

/**
 * @deprecated
 */

export const Popup: FC<PopupProps> = (props) => {
  const { className, trigger, children, direction = "bottom end" } = props;

  return (
    <Popover className={className}>
      <PopoverButton as="div" children={trigger} />
      <PopoverPanel transition anchor={direction}>
        {children}
      </PopoverPanel>
    </Popover>
  );
};
