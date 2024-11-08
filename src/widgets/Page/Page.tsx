import {
  FC,
  MutableRefObject,
  ReactNode,
  UIEvent,
  useEffect,
  useRef,
} from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cl from "./Page.module.scss";
import { useInfiniteScroll } from "shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { getScrollSaveByPath, scrollSaveActions } from "features/ScrollSave";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { StateSchema } from "app/providers/StoreProvider";
import { useThrottle } from "shared/lib/hooks/useThrottle/useThrottle";

interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
  isSaveScroll?: boolean;
}

export const Page: FC<PageProps> = (props) => {
  const { className, children, onScrollEnd, isSaveScroll = true } = props;
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();

  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const scrollPosition = useSelector((state: StateSchema) =>
    getScrollSaveByPath(state, pathname)
  );

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(
      scrollSaveActions.setScrollPosition({
        path: pathname,
        position: e.currentTarget.scrollTop,
      })
    );
  }, 500);

  useEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  }, [scrollPosition]);

  return (
    <section
      {...(isSaveScroll ? { onScroll } : {})}
      ref={wrapperRef}
      className={classNames(cl.Page, {}, [className])}
    >
      {children}
      {onScrollEnd ? <div className={cl.trigger} ref={triggerRef} /> : null}
    </section>
  );
};
