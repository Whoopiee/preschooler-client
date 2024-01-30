import { useState } from 'react';

type MoveThroughArrayHook<T> = {
  currentElement: T | null;
  previousElement: T | null;
  moveToNext: () => void;
  moveToPrevious: () => void;
};

export const useMoveThroughArray = <T>(
  elements: T[],
  startPosition = 0,
): MoveThroughArrayHook<T> => {
  const [currentIndex, setCurrentIndex] = useState<number>(startPosition);

  const currentElement = elements[currentIndex] || null;
  const previousElement = currentIndex === 0
    ? elements[elements.length - 1]
    : elements[currentIndex - 1] || null;

  const moveToNext = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % elements.length);
  };

  const moveToPrevious = (): void => {
    setCurrentIndex((prevIndex) => (
      (prevIndex - 1 + elements.length) % elements.length
    ));
  };

  return {
    currentElement,
    previousElement,
    moveToNext,
    moveToPrevious,
  };
};
