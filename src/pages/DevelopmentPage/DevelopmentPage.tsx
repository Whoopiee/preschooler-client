/* eslint-disable max-len */
import React, { useEffect } from 'react';
import Color from 'color';
import { interpolate } from 'flubber'; // in Declaration File
import { animated, useSpring } from '@react-spring/web';
import styles from './DevelopPage.module.scss';

import { useMoveThroughArray } from '../../hooks/useMoveThroughArray';

const triangle = 'M320 43L493.205 343.758H146.795L320 43Z';
const star = 'M320 24L364.903 162.197H510.211L392.654 247.607L437.557 385.803L320 300.393L202.443 385.803L247.346 247.607L129.789 162.197H275.097L320 24Z';
const square = 'M161 41h318v318H161Z';
const circle = 'M153 199.5a166.5 166.5 0 1 0 333 0a166.5 166.5 0 1 0 -333 0';
const rectangle = 'M119 71h402v258H119Z';
const oval = 'M69 199.5a251 146.5 0 1 0 502 0a251 146.5 0 1 0 -502 0';

type Shape = {
  name: string;
  shape: string;
  color: Color;
};

const shapes: Shape[] = [
  {
    name: 'Triangle',
    shape: triangle,
    color: Color('#00cc88'),
  },
  {
    name: 'Star',
    shape: star,
    color: Color('#0099ff'),
  },
  {
    name: 'Rectangle',
    shape: rectangle,
    color: Color('#ee4444'),
  },
  {
    name: 'Circle',
    shape: circle,
    color: Color('#8855ff'),
  },
  {
    name: 'Square',
    shape: square,
    color: Color('#ff0055'),
  },
  {
    name: 'Oval',
    shape: oval,
    color: Color('#ffcc00'),
  },
];

export const DevelopmentPage: React.FC = () => {
  const { currentElement, previousElement, moveToNext } = useMoveThroughArray<Shape>(shapes, 1);

  // Все dependencies важны потому что я хуй знает как, но это позволяет избавиться от
  // смешного рендера одного кадра со старой фигурой. Из-за чего картинка моргала
  const [{ x }, api] = useSpring(() => ({
    from: { x: 0 },
    reset: true, // determines whether the animation should reset to its initial state when the component mounts or when the animation is stopped
  }), [currentElement, previousElement]);

  useEffect(() => {
    const id = setInterval(() => {
      moveToNext();
    }, 5000);

    return () => clearInterval(id);
  }, [api, moveToNext]);

  useEffect(() => {
    api.start({
      from: { x: 0 },
      to: { x: 1 },
      config: {
        duration: 250,
      },
    });
  }, [currentElement, previousElement, api]);

  const interpolator = interpolate(previousElement?.shape, currentElement?.shape, { maxSegmentLength: 10 });
  const path = x.to(value => interpolator(value));
  const fill = x.to({
    range: [0, 1],
    output: [previousElement?.color.hex() ?? '#000', currentElement?.color.hex() ?? '#000'],
  });

  return (
    <div className={styles.page}>
      <div className={styles.shape}>
        <svg className={styles.placeholder} width="640" height="400" viewBox="0 0 640 400" fill="none" stroke="black" strokeDasharray={10}>
          <path d={triangle} />
        </svg>
        <svg className={styles.target} width="640" height="400" viewBox="0 0 640 400" fill="none">
          <animated.path d={path} fill={fill} />
        </svg>
      </div>
    </div>
  );
};
