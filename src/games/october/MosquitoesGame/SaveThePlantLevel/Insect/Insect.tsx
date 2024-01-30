import React, { ComponentProps, useState } from 'react';
import { AnimationProps, motion, useAnimation } from 'framer-motion';
import _ from 'lodash';
import { resolveImage } from '@helpers/resolver';
import { useDidUpdateEffect } from '@hooks/useDidUpdateEffect';

const duration = 1.5;
const ease = ['easeIn', 'easeOut', 'circIn',
  'circOut', 'backIn', 'backOut', 'linear'];
const positionsX = [-220, -150, -80, 80, 150, 220];
const positionsY = [-300, -200, -180, -100, -50, 100];
const shakeRotations = [0, -35, 35, -25, 25, -15, 15, -10, 10];

type Props = {
  image: string;
  kill?: () => void;
  isKilled?: boolean;
  initial?: {
    rotate?: number;
  } & AnimationProps,
} & ComponentProps<typeof motion.img>;

export const Insect: React.FC<Props> = React.memo(({
  image,
  kill,
  isKilled,
  initial,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const controls = useAnimation();

  useDidUpdateEffect(() => {
    handleFalldownAnimation();
  }, [isKilled]);

  const handleFalldownAnimation = async () => {
    const [easeX, easeY] = _.sampleSize(ease, 2);

    const randomX = _.sample(positionsX);
    const randomY = _.sample(positionsY);

    await Promise.all([
      controls.start({
        y: [0, randomX],
        transition: {
          duration,
          ease: easeX,
        },
      }),
      controls.start({
        x: [0, randomY],
        transition: {
          duration,
          ease: easeY,
        },
      }),
      controls.start({
        rotate: 360,
        opacity: [1, 0.8, 0],
        transition: {
          duration,
          ease: 'easeOut',
        },
      })]);

    setIsVisible(false);
  };

  const handleShakeAnimation = async () => {
    const i = initial?.rotate ?? 0;

    await controls.start({
      y: [0, -3, -5, 0],
      rotate: [...shakeRotations.map(r => r + i), i],
      transition: {
        duration: 1.5,
        ease: 'easeInOut',
      },
    });
  };

  return (
    isVisible && (
      <motion.img
        whileHover={{ scale: 1.15 }}
        onClick={
          kill || handleShakeAnimation
        }
        animate={controls}
        src={resolveImage(image)}
        initial={initial}
        {...props}
      />
    )
  );
});
