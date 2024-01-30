import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { v4 as uuid } from 'uuid';
import cn from 'classnames';
import { Picture } from '@components/Picture';
import { DynamicOrnamentType } from '@customTypes/IOrnament';
import { ornamentData } from './DragOrnament.settings';

import styles from './DragOrnament.module.scss';

type RefProp = {
  onClear: () => void,
};

type Prop = {
  handleComplete?: () => void,
};

export const DragOrnament = React.forwardRef<RefProp, Prop>(
  ({ handleComplete }) => {
    const [
      dynamicOrnaments,
      setDynamicOrnaments,
    ] = useState<DynamicOrnamentType[]>([]);

    const initializeDynamics = () => {
      const data = ornamentData.map((item, index) => {
        return {
          id: uuid(),
          data: Array.from({ length: 6 }, () => item),
          className: `ornament${index}`,
        };
      });

      setDynamicOrnaments(data);
    };

    useEffect(() => {
      initializeDynamics();
    }, []);

    return (
      <div className={styles.container}>
        <div
          className={styles.dropContainer}
        >
          <Picture
            src="pics/vyshyvanka-paint.svg"
            className={styles.image}
            draggable={false}
          />
          <div
            className={styles.dragContainer}
          >
            {dynamicOrnaments.map((item, index) => (
              <div
                className={styles.wrapper}
                key={uuid()}
              >
                {item.data.map((ornament) => (
                  <motion.div
                    className={cn(styles.draggable, styles[`ornament${index}`])}
                    drag
                    key={uuid()}
                    dragMomentum={false}
                    initial={{ x: 0, y: 0 }}
                    // animate={controlsArray[index]}
                    whileDrag={{ scale: 1.1 }}
                    // dragConstraints={dragConstraints}
                    onDragEnd={handleComplete}
                  >
                    <Picture
                      src={ornament.image}
                      id={ornament.id}
                      className={styles.imageOrnament}
                      draggable={false}
                    />
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  },
);
