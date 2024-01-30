import { useState } from 'react';

export const useMouseHover = () => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return {
    isHover,
    handleMouseEnter,
    handleMouseLeave,
  };
};
