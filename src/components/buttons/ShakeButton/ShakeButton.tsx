import React, { useMemo } from 'react';
import { animated, useSpring, easings } from '@react-spring/web';

type Props = {
  children: React.ReactNode;
  onClick: () => void;
  isShake?: boolean;
  color?: string;
  colorDanger?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const ShakeButton: React.FC<Props> = ({
  children,
  onClick,
  isShake = true,
  color = '#d4f1ff',
  colorDanger = '#faf682',
  ...props
}) => {
  const [{ x, y, backgroundColor }, api] = useSpring(() => ({
    from: { x: 0, y: 0, backgroundColor: '#d4f1ff' },
  }));

  const xInterpolated = useMemo(() => x.to(
    [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    [0, 5, -4, 10, -6, 4, -2, 4, -6, 7, 0],
  ), [x]);

  const yInterpolated = useMemo(() => y.to(
    [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    [0, 3, -3, -1, 4, -5, 5, -1, 2, -2, 0],
  ), [y]);

  const shakeButton = () => {
    api.start({
      from: { x: 0, y: 0 },
      to: { x: 1, y: 1 },
      config: {
        duration: 1000,
      },
    });

    api.start({
      from: { backgroundColor: color },
      to: [
        { backgroundColor: colorDanger },
        { backgroundColor: color },
      ],
      config: {
        duration: 600,
        easing: easings.easeInOutCirc,
      },
    });
  };

  const handleButtonClick = () => {
    onClick();

    if (isShake) {
      shakeButton();
    }
  };

  return (
    <animated.button
      style={{ x: xInterpolated, y: yInterpolated, backgroundColor }}
      onClick={handleButtonClick}
      {...props}
    >
      {children}
    </animated.button>
  );
};
