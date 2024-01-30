import { useEffect, useRef, useCallback } from 'react';
import scrollIntoView from 'scroll-into-view';

type UseScrollIntoViewProps = Partial<{
  top: number;
  time: number;
  isOnMount: boolean;
}>;

export const useScrollIntoView = <T extends HTMLElement>(
  props?: UseScrollIntoViewProps,
) => {
  const { top = 0, time = 400, isOnMount = true } = props ?? {};
  const elementToScroll = useRef<T>(null);

  const scrollTo = useCallback(() => {
    if (elementToScroll.current) {
      scrollIntoView(elementToScroll.current, {
        time,
        align: {
          top,
        },
      });
    }
  }, [elementToScroll]);

  useEffect(() => {
    if (isOnMount) {
      scrollTo();
    }
  }, []);

  return { elementToScroll, scrollTo };
};
