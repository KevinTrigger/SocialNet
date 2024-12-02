import { ReactNode } from "react";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import cl from "./Modal.module.scss";
import { Portal } from "shared/ui/Portal";
import { useTheme } from "app/providers/ThemeProvider";
import { Overlay } from "shared/ui/Overlay/Overlay";
import { HStack } from "shared/ui/Stack";
import { useModal } from "shared/lib/hooks/useModal/useModal";

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

const ANIMATION_DELAY = 300;

const Modal = (props: ModalProps) => {
  const { children, className, isOpen, onClose, lazy } = props;

  const { close, isClosing, isMounted } = useModal({
    animationDelay: ANIMATION_DELAY,
    onClose,
    isOpen,
  });
  const { theme } = useTheme();

  const mods: Mods = {
    [cl.opened]: !!isOpen,
    [cl.isClosing]: isClosing,
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <HStack
        className={classNames(cl.Modal, mods, [className, theme, "app_modal"])}
      >
        <Overlay onClick={close} />
        <div className={cl.content}>{children}</div>
      </HStack>
    </Portal>
  );
};

export default Modal;