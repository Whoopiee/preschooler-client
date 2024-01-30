/* eslint-disable max-len */
import React from 'react';

import { useWaterGame } from '@games/october/WaterGame';
import { useEarthGame } from '@games/october/EarthGame';
import { useMusicInstrumentGame } from '@games/october/MusicInstrumentGame';
import { useMusicGenresOctoberGame } from '@games/october/MusicGenresOctoberGame';
import { useSculptureGame } from '@games/october/SculptureGame';
import { useDigitsGame } from '@games/october/DigitsGame';
import { useLetterAGame } from '@games/october/LetterAGame';
import { useLetterYGame } from '@games/october/LetterYGame';
import { usePoliteWordsGame } from '@games/october/PoliteWordsGame';
import { useNationalDanceGame } from '@games/october/NationalDanceGame';
import { useFamilyGame } from '@games/october/FamilyGame';
import { useMyHometownGame } from '@games/october/MyHometownGame';
import { useLogicOctoberGame } from '@games/october/LogicOctoberGame';
import { useHumanNeedsGame } from '@games/october/HumanNeedsGame';
import { useLandscapeGame } from '@games/october/LandscapeGame';
import { useMosquitoesGame } from '@games/october/MosquitoesGame';
import { usePlantsOfMotherland } from '@games/october/PlantsOfMotherlandGame';
import { useMissingLettersGame } from '@games/october/MissingLettersGame';
import { useMissingSyllablesGame } from '@games/october/MissingSyllablesLevel';
import { useLetsCountNumbersGame } from '@games/october/LetsCountNumbersGame';
// import { useDragAnimalLevel } from '@games/october/DragAnimalsGame';

export const useOctoberRoutes = (): React.ReactElement => {
  return (
    <>
      {useEarthGame()}
      {useWaterGame()}
      {useMusicInstrumentGame()}
      {useMusicGenresOctoberGame()}
      {useSculptureGame()}
      {useDigitsGame()}
      {useLetterAGame()}
      {useLetterYGame()}
      {usePoliteWordsGame()}
      {useNationalDanceGame()}
      {useFamilyGame()}
      {useMyHometownGame()}
      {useLogicOctoberGame()}
      {useHumanNeedsGame()}
      {useLandscapeGame()}
      {useMosquitoesGame()}
      {usePlantsOfMotherland()}
      {useMissingLettersGame()}
      {useMissingSyllablesGame()}
      {useLetsCountNumbersGame()}
    </>
  );
};
