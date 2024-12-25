import { FC, ReactNode, useCallback, useEffect } from "react";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import { Portal } from "../Portal";
import { Overlay } from "../Overlay/Overlay";
import { useTheme } from "app/providers/ThemeProvider";
import cl from "./Drawer.module.scss";
import {
  AnimationProvider,
  useAnimationLibs,
} from "shared/lib/components/AnimationProvider";

interface DrawerProps {
  children: ReactNode;
  className?: string;
  onClose?: () => void;
  isOpen?: boolean;
  lazy?: boolean;
}

const height = window.innerHeight - 100;

/**
 * @deprecated
 */

const DrawerContent: FC<DrawerProps> = (props) => {
  const { className, children, isOpen, onClose } = props;
  const { Spring, Gesture } = useAnimationLibs();

  const [{ y }, api] = Spring.useSpring(() => ({ y: height }));
  const { theme } = useTheme();

  const openDrawer = useCallback(() => {
    api.start({ y: 0, immediate: false });
  }, [api]);

  useEffect(() => {
    if (isOpen) {
      openDrawer();
    }
  }, [api, isOpen, openDrawer]);

  const close = (velocity = 0) => {
    api.start({
      y: height,
      immediate: false,
      config: { ...Spring.config.stiff, velocity },
      onResolve: onClose,
    });
  };

  const bind = Gesture.useDrag(
    ({
      last,
      velocity: [, vy],
      direction: [, dy],
      movement: [, my],
      cancel,
    }) => {
      if (my < -70) cancel();

      if (last) {
        if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
          close();
        } else {
          openDrawer();
        }
      } else {
        api.start({ y: my, immediate: true });
      }
    },
    {
      from: () => [0, y.get()],
      filterTaps: true,
      bounds: { top: 0 },
      rubberband: true,
    }
  );

  const display = y.to((py) => (py < height ? "block" : "none"));

  const mods: Mods = {
    [cl.opened]: isOpen,
  };

  return (
    <Portal>
      <div
        className={classNames(cl.Drawer, mods, [
          className,
          theme,
          "app_drawer",
        ])}
      >
        <Overlay onClick={onClose} />
        <Spring.a.div
          {...bind()}
          className={cl.sheet}
          style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
        >
          {children}
        </Spring.a.div>
      </div>
    </Portal>
  );
};

const DrawerAsync = (props: DrawerProps) => {
  const { isLoaded } = useAnimationLibs();

  if (!isLoaded) return null;

  return <DrawerContent {...props} />;
};

export const Drawer = (props: DrawerProps) => {
  return (
    <AnimationProvider>
      <DrawerAsync {...props} />
    </AnimationProvider>
  );
};
