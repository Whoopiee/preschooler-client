import { useRef, useEffect, RefObject } from 'react';

// Задает высоту блока относительно его же ширины.
// Принимает соотношение сторон
export const useAspectRatio = <T extends HTMLElement>(
  aspectRatio = 0.75, // 4 x 3 aspect ratio
): RefObject<T> => {
  const divRef = useRef<T>(null);

  useEffect(() => {
    const resizeHandler = () => {
      if (divRef.current) {
        const width = divRef.current.offsetWidth;
        const height = width * aspectRatio;

        divRef.current.style.height = `${height}px`;
      }
    };

    resizeHandler();
    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return divRef;
};
