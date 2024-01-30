import React from 'react';
import { motion, MotionProps } from 'framer-motion';

type Props = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement> & MotionProps;

export const AnimatedScaleAndRotate: React.FC<Props> = React.memo(({
  children,
  ...props
}) => {
  return (
    <motion.div
      animate={{
        scale: [0, 1.3, 1.3, 1],
        rotate: [0, 0, 90, 90],
      }}
      transition={{
        duration: 1.2,
        ease: 'easeInOut',
        times: [0, 0.35, 0.65, 1],
        repeatDelay: 1,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
});
