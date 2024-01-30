import { useState, useEffect, RefObject } from 'react';

type Size = {
  width: number;
  height: number;
};

// Принимает RefObject на ДОМ ноду, привязывается к ней, и на каждый
// resize возвращается текущие размеры элемента. Они могут быть считаны
// любой другой ДОМ нодой в любом месте
export const useNodeSize = (nodeRef: RefObject<HTMLElement>): Size => {
  const [dimensions, setDimensions] = useState<Size>({
    width: 0,
    height: 0,
  });

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    const parentNode = nodeRef.current as HTMLElement;
    const resizeObserver = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;

      setDimensions({ width, height });
    });

    if (parentNode) {
      resizeObserver.observe(parentNode);

      return () => {
        resizeObserver.unobserve(parentNode);
      };
    }
  }, [nodeRef]);

  return dimensions;
};
