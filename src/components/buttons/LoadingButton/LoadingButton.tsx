import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { PrimaryButton } from '../PrimaryButton';

type Props = {
  isLoading: boolean;
} & React.ComponentProps<typeof PrimaryButton>;

export const LoadingButton: React.FC<Props> = ({
  isLoading,
  children,
  ...props
}) => {
  return (
    <PrimaryButton {...props}>
      {isLoading ? (
        <ThreeDots
          height="40"
          width="40"
          radius="9"
          color="#ffffff"
          ariaLabel="three-dots-loading"
          visible
        />
      ) : (
        children
      )}
    </PrimaryButton>
  );
};
