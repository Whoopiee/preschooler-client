import React, { useState } from 'react';
import Color from 'color';
import cn from 'classnames';

import styles from './ColorPicker.module.scss';

type Props = {
  colors: Color[],
  setActiveColor: (newColor: Color) => void,
  isHorizontal?: boolean,
};

export const ColorPicker: React.FC<Props> = ({
  colors,
  setActiveColor,
  isHorizontal,
}) => {
  const [selectedColor, setSelectedColor] = useState<Color>(Color('#FFFFFF'));
  const handleColorClick = (color: Color) => {
    setSelectedColor(color);
    setActiveColor(color);
  };

  return (
    <ul className={cn(
      styles.colorList,
      {
        [styles.horizontal]: isHorizontal,
      },
    )}
    >
      {colors.map(color => (
        <button
          type="button"
          aria-label="Color"
          key={color.hex()}
          style={{ backgroundColor: color.hex() }}
          className={cn(
            styles.color,
            {
              [styles.selected]: selectedColor.hex() === color.hex(),
            },
          )}
          onClick={() => handleColorClick(color)}
        />
      ))}
    </ul>
  );
};
