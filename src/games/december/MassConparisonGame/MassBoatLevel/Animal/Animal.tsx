import React, { ComponentProps, useState } from 'react';
import { AnimationProps, motion, useAnimation } from 'framer-motion';
import { resolveImage } from '@helpers/resolver';

type Props = {
  image: string,
  isRemovable: boolean,
  handleRemove: () => void,
  initial?: {
    rotate?: number,
  } & AnimationProps
} & ComponentProps<typeof motion.img>;

export const Animal: React.FC<Props> = React.memo(({
  image,
  isRemovable,
  initial,
  handleRemove,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const controls = useAnimation();

  const handleShakeAnimation = async () => {
    await controls.start({
      x: [0, -3, -5, 0, 2],
      transition: {
        duration: 0.35,
      },
    });
  };

  const handleFalldownAnimation = async () => {
    await Promise.all([
      controls.start({
        y: [0, -100, 150],
        transition: {
          duration: 0.8,
          ease: 'easeInOut',
        },
      }),
      controls.start({
        x: [0, 70],
        opacity: [1, 0.8, 0.5, 0],
        transition: {
          duration: 1,
          ease: 'easeInOut',
        },
      }),
    ]);

    handleRemove();
    setIsVisible(false);
  };

  const handleClickReact = () => {
    return (!isRemovable
      ? handleShakeAnimation()
      : handleFalldownAnimation());
  };

  return (
    isVisible && (
      <motion.img
        whileHover={{ scale: 1.2 }}
        src={resolveImage(image)}
        onClick={handleClickReact}
        animate={controls}
        {...props}
      />
    )
  );
});
