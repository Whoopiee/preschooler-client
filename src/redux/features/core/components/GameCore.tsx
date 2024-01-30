import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useAppSelector, useAppDispatch } from '@redux/hooks';
import { finishGame, startGame } from '@core/coreSlice';
import { Game } from '@customTypes/game';

type Props = {
  game: Game;
};

export const GameCore: React.FC<Props> = ({ game }) => {
  const { activeGame } = useAppSelector(state => state.core);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!activeGame) {
      dispatch(startGame(game));
    }

    return (): void => {
      dispatch(finishGame());
    };
  }, []);

  useEffect(() => {
    return () => toast.dismiss();
  }, []);

  return <Outlet />;
};
