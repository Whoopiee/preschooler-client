import React from 'react';

import { useLearnNumber8Game } from '@games/january/LearnNumber8Game';
import { useVolumeInfoGame } from '@games/january/VolumeInfoGame';
import { useLetterVGame } from '@games/january/LetterVGame';
import { useLetterPGame } from '@games/january/LetterPGame';
import { useLetterKGame } from '@games/january/LetterKGame';
import { useLogicJanuaryGame } from '@games/january/LogicJanuaryGame';
import { useSeaAndOceanGame } from '@games/january/SeaAndOceanGame';
import { useFoodChainGame } from '@games/january/FoodChainGame';
import { useMagicWinterGame } from '@games/january/MagicalWinterGame';
import { useElectricityGame } from '@games/january/ElectricityGame';
import { useClothesGame } from '@games/january/ClothesGame';
import { useChristmasToysGame } from '@games/january/ChristmasDecorationsGame';
import { useAnthemGame } from '@games/january/AnthemGame';
import { useMusicalMoodsGame } from '@games/january/MusicalMoods';
import { useWinterFestGame } from '@games/january/WinterFestGame';
import { usePoultryGame } from '@games/january/PoultryBirdsGame';
import { useAnimalCareGame } from '@games/january/AnimalCareGame';

export const useJanuaryRoutes = (): React.ReactElement => {
  return (
    <>
      {useLearnNumber8Game()}
      {useVolumeInfoGame()}
      {useLetterVGame()}
      {useLetterPGame()}
      {useLetterKGame()}
      {useLogicJanuaryGame()}
      {useSeaAndOceanGame()}
      {useFoodChainGame()}
      {useMagicWinterGame()}
      {useElectricityGame()}
      {useClothesGame()}
      {useChristmasToysGame()}
      {useAnthemGame()}
      {useMusicalMoodsGame()}
      {useWinterFestGame()}
      {usePoultryGame()}
      {useAnimalCareGame()}
    </>
  );
};
