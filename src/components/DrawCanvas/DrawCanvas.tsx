import React, { Dispatch, SetStateAction } from 'react';
import { v4 as uuid } from 'uuid';
import Color from 'color';
import Konva from 'konva';
import { Stage, Layer, Line } from 'react-konva';

import { useAspectRatio } from '@hooks/useAspectRatio';
import { useNodeSize } from '@hooks/useNodeSize';
import { DrawCanvasLine } from './DrawCanvas.types';

import styles from './DrawCanvas.module.scss';

type Props = {
  lines: DrawCanvasLine[];
  setLines: Dispatch<SetStateAction<DrawCanvasLine[]>>;
  aspectRation: number;
  image: string;
  color?: Color;
  isRound?: boolean;
};

// Чтобы задать размеры, нужно задать ширину для блока обертки через scss стили
// А для высоты подобрать aspectRatio, то есть просто задать его как у картинки
export const DrawCanvas: React.FC<Props> = ({
  lines,
  setLines,
  aspectRation,
  image,
  color = Color('#df4b26'),
  isRound = false,
}) => {
  const isDrawing = React.useRef(false);

  const handleMouseDown = (e: Konva.KonvaEventObject<MouseEvent>) => {
    isDrawing.current = true;

    const stage = e.target.getStage();

    if (!stage) {
      return;
    }

    const pos = stage.getPointerPosition();

    if (!pos) {
      return;
    }

    const newLine = {
      tool: 'pen',
      points: [pos.x, pos.y],
      color: color.hex(),
    };

    setLines(prevState => [...prevState, newLine]);
  };

  const handleMouseMove = (e: Konva.KonvaEventObject<MouseEvent>) => {
    if (!isDrawing.current) {
      return;
    }

    const stage = e.target.getStage();

    if (!stage) {
      return;
    }

    const pos = stage.getPointerPosition();

    if (!pos) {
      return;
    }

    const lastLine = lines[lines.length - 1];

    // to fix bug - exeeding the limits of canvas while drawing and
    // at the same time press 'Clear' button - got error caused by undefined value
    if (lastLine && lastLine.points) {
      lastLine.points = lastLine.points.concat([pos.x, pos.y]);

      lines.splice(lines.length - 1, 1, lastLine);
      setLines([...lines]);
    }
  };

  const containerRef = useAspectRatio<HTMLDivElement>(aspectRation);
  const { width, height } = useNodeSize(containerRef);

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  return (
    <div
      className={styles.container}
      ref={containerRef}
    >
      <Stage
        width={width}
        height={height}
        onMouseDown={handleMouseDown}
        onMousemove={handleMouseMove}
        onMouseup={handleMouseUp}
        className={styles.back}
        style={{
          backgroundImage: `url(${import.meta.env.VITE_FILES_API_URL}/images/${image})`,
          cursor: 'pointer',
          borderRadius: isRound ? '50%' : 0,
          overflow: 'hidden',
        }}
      >
        <Layer>
          {lines.map((line) => (
            <Line
              key={uuid()}
              points={line.points}
              stroke={line.color}
              strokeWidth={5}
              tension={0.5}
              lineCap="round"
              lineJoin="round"
              globalCompositeOperation={
                line.tool === 'eraser' ? 'destination-out' : 'source-over'
              }
            />
          ))}
        </Layer>
      </Stage>
    </div>
  );
};
