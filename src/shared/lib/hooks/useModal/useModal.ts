import { MutableRefObject, useCallback, useEffect, useRef, useState } from "react";

export interface UseModalProps {
  onClose?: () => void;
  isOpen?: boolean;
  animationDelay?: number,
}

export function useModal(props: UseModalProps) {
  const { animationDelay, isOpen, onClose } = props;

  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  const close = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, animationDelay);
    }
  }, [onClose, animationDelay]);

  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
      }
    },
    [close]
  );

  useEffect(() => {
    if (isOpen) {
        window.addEventListener('keydown', handleEscape);
    }

    return () => {
        clearTimeout(timerRef.current);
        window.removeEventListener('keydown', handleEscape);
    };
}, [isOpen, handleEscape]);


  return {
    isClosing,
    isMounted,
    close
  }
}