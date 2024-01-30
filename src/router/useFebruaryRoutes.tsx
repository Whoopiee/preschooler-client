import React from 'react';

import { useTrigonGame } from '@games/february/TrigonGame';

export const useFebruaryRoutes = (): React.ReactElement => {
  return (
    <>
      {useTrigonGame()}
    </>
  );
};
