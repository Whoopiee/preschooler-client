import { useState, useRef, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
// import _ from 'lodash';
import { Template } from '@customTypes/Template';
import { LevelLayout } from '@core/components/LevelLayout';
import { DropZone } from './DropZone';
import { DragZone } from './DragZone';
import {
  IDropTemplate,
  DropContainer,
} from './DragInZonesTemplate.settings';

import styles from './DragInZonesTemplate.module.scss';

export const DragInZonesTemplate: Template<IDropTemplate> = ({ level }) => {
  const [dropPosition, setDropposition] = useState<DropContainer[]>();
  const [parentSize, setParentSize] = useState({ width: 0, height: 0 });
  // const [correctItems, setCorrectItems] = useState([]);

  const parentRef = useRef<HTMLDivElement | null>(null);
  const dropRef = useRef(null);
  const data: DropContainer[] = Array.from(
    { length: level.zonesNumber },
    (_, index) => {
      return {
        id: uuid(),
        data: level.staticData ? level.staticData[index].prop : [],
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      };
    },
  );

  const handleDropEnd = (info: any) => {
    // let isInside = false;

    if (dropPosition) {
      for (let i = 0; i < dropPosition.length; i += 1) {
        if (
          info.top + 40 >= dropPosition[i].top
          && info.right - 10 <= dropPosition[i].right
          && info.bottom - 20 <= dropPosition[i].bottom
          && info.left + 10 >= dropPosition[i].left
        ) {
          // isInside = true;
          break;
        }
      }
    }
  };

  const handleDropzonePosition = (object: DropContainer[]) => {
    setDropposition(object);
  };

  const updateElementSize = () => {
    if (parentRef.current) {
      setParentSize({
        width: parentRef.current.offsetWidth,
        height: parentRef.current.offsetHeight,
      });
    }
  };

  // const handleClear = () => {
  // if (dropRef.current) {
  //   dropRef.current.onClear();
  // }
  // };

  useEffect(() => {
    updateElementSize();
  }, []);

  return (
    <LevelLayout
      {...level}
    // onClear={handleClear}
    >
      <div
        className={styles.container}
        ref={parentRef}
      >
        <DragZone
          ref={dropRef}
          parentSize={parentSize}
          dragItems={[]}
          handleDropEnd={handleDropEnd}
        />
        <DropZone
          data={data}
          handleDropzonePosition={handleDropzonePosition}
        />
      </div>
    </LevelLayout>
  );
};
