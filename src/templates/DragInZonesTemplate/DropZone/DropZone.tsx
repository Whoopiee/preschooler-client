import React, { useState, useEffect } from 'react';
import { Picture } from '@components/Picture';
// import cn from 'classnames';

import { DropContainer } from '../DragInZonesTemplate.settings';

import styles from './DropZone.module.scss';

type Props = {
  data: DropContainer[],
  handleDropzonePosition: (data: DropContainer[]) => void,
};

export const DropZone: React.FC<Props> = ({ data, handleDropzonePosition }) => {
  const [defaultZone, setDefaultZone] = useState(data);

  const initializeTargetContainers = async () => {
    const updateContainer = data.map((item) => {
      const targetArea = document.getElementById(item.id);
      const targetAreaRect = targetArea!.getBoundingClientRect();

      return {
        ...item,
        top: targetAreaRect.top,
        right: targetAreaRect.right,
        bottom: targetAreaRect.bottom,
        left: targetAreaRect.left,
      };
    });

    handleDropzonePosition(updateContainer);
    setDefaultZone(updateContainer);
  };

  useEffect(() => {
    initializeTargetContainers();

    const handleScroll = () => {
      initializeTargetContainers();
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.dropzone}>
      {defaultZone.map(dropZone => (
        <div
          className={styles.container}
          id={dropZone.id}
          key={dropZone.id}
        >
          {dropZone.data && dropZone.data.map((element) => (
            <div
              id={element.id}
              key={element.id}
              className={
                // cn(styles.block, element.static ? styles.static : null)
                styles.block
              }
            >
              <Picture
                className={styles.image}
                src={element.image}
                draggable={false}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
