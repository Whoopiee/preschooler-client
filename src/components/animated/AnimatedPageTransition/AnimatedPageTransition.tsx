import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

type Props = {
  children: React.ReactNode;
  pageKey: number;
};

export const AnimatedPageTransition: React.FC<Props> = ({
  children,
  pageKey,
}) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pageKey}
        initial={{ y: 15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -15, opacity: 0 }}
        transition={{ duration: 0.3 }}
        style={{ width: '100%' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
