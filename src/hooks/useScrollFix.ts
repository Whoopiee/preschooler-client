import { useState, useEffect } from 'react';

// Убирает скролл в браузере. Делался под MilkLevel, чтобы при выборе
// карточки не было непреднамеренного скролла. Он минимальный, но бесит сука.

// Решил забить хуй потому что нужно сделать чтобы скролл вырубался
// только на компах, а оставался на моб. и планшетах.

// А ещё как никрути минимальный скролл есть из-за дефолтного поведения
// браузера "rubber-banding". Из за этого кстати Draggable елемент может хуевить

export const useScrollFix = () => {
  const [yOffset, setYOffset] = useState(0);
  const [isFixed, setIsFixed] = useState(false);

  const handleScroll = () => {
    window.scrollTo(0, yOffset);
  };

  useEffect(() => {
    if (isFixed) {
      window.addEventListener('scroll', handleScroll);
    } else {
      window.removeEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isFixed]);

  const fixScrollPosition = (): void => {
    setYOffset(window.scrollY);
    setIsFixed(true);
  };

  const unfixScrollPosition = (): void => {
    setIsFixed(false);
  };

  return {
    fixScrollPosition,
    unfixScrollPosition,
  };
};
