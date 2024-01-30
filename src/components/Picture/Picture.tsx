import React from 'react';

type Props = React.ImgHTMLAttributes<HTMLImageElement>;

export const Picture: React.FC<Props> = ({ ...props }) => {
  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <img
      {...props}
      src={`${import.meta.env.VITE_FILES_API_URL}/images/${props.src}`}
    />
  );
};
