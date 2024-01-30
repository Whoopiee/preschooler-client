/* eslint-disable max-len */
import React from 'react';

import { useNumberSixGame } from '@games/november/NumberSixGame';
import { useLetterTGame } from '@games/november/LetterTGame';
import { useLetterOGame } from '@games/november/LetterOGame';
import { useLetterMGame } from '@games/november/LetterMGame';
import { useLetterLGame } from '@games/november/LetterLGame';
import { MusicGenresNovemberGame } from '@games/november/MusicGenresNovemberGame';
import { useFoodGame } from '@games/november/FoodGame';
import { useBreadIsEverythingGame } from '@games/november/BreadIsEverythingGame';
import { useLogicNovemberGame } from '@games/november/LogicNovemberGame';
import { useLengthInfoGame } from '@games/november/LengthInfoGame';
import { useArtworkGame } from '@games/november/ArtworkGame';
import { useAutumnVegetablesGame } from '@games/november/AutumnVegetablesGame';
import { useRiverLakeGame } from '@games/november/RiverLakeGame';
import { useAutumnFruitsGame } from '@games/november/AutumnFruitsGame';
import { usePetrikivkaGame } from '@games/november/PetrikivkaGame';

export const useNovemberRoutes = (): React.ReactElement => {
  return (
    <>
      {useNumberSixGame()}
      {useLetterTGame()}
      {useLetterOGame()}
      {useLetterMGame()}
      {useLetterLGame()}
      {MusicGenresNovemberGame()}
      {useFoodGame()}
      {useBreadIsEverythingGame()}
      {useLogicNovemberGame()}
      {useLengthInfoGame()}
      {useArtworkGame()}
      {useAutumnVegetablesGame()}
      {useRiverLakeGame()}
      {useAutumnFruitsGame()}
      {usePetrikivkaGame()}
    </>
  );
};
