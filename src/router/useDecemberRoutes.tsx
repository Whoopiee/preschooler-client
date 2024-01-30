import React from 'react';

import { useTrigonGame } from '@games/february/TrigonGame';
import { useTransportGame } from '@games/december/TransportGame';
import { useLetterIGame } from '@games/december/LetterIGame';
import { useLetterNGame } from '@games/december/LetterNGame';
import { useLetterSGame } from '@games/december/LetterSGame';
import { useLetterUGame } from '@games/december/LetterUGame';
import { usePortraitGame } from '@games/december/PortraitGame';
import { useConversationGame } from '@games/december/ConversationGame';
import { useLineOfLifeGame } from '@games/december/LineOfLifeGame';
import { useLogicDecemberGame } from '@games/december/LogicDecemberGame';
import { useMountainsAndPlainsGame }
  from '@games/december/MountainsAndPlainsGame';
import { usePetsAndAnimalsGame } from '@games/december/PetsAndAnimalsGame';
import { useToleranceGame } from '@games/december/ToleranceGame';
import { useLearnNumber7Game } from '@games/december/LearnNumber7Game';
import { useMassConparisonGame } from '@games/december/MassConparisonGame';
import { useHerbsGame } from '@games/december/HerbsGame';
import { useForestPlantsGame } from '@games/december/ForestPlantsGame';
import {
  useFactoriesAndNatureGame,
} from '@games/december/FactoriesAndNatureGame';
import { useVyshyvankaGame } from '@games/december/VyshyvankaGame';

export const useDecemberRoutes = (): React.ReactElement => {
  return (
    <>
      {useTrigonGame()}
      {useLetterIGame()}
      {useLetterNGame()}
      {useLetterSGame()}
      {useLetterUGame()}
      {useTransportGame()}
      {usePortraitGame()}
      {useConversationGame()}
      {useLineOfLifeGame()}
      {useLogicDecemberGame()}
      {useMountainsAndPlainsGame()}
      {usePetsAndAnimalsGame()}
      {useToleranceGame()}
      {useLearnNumber7Game()}
      {useMassConparisonGame()}
      {useHerbsGame()}
      {useForestPlantsGame()}
      {useFactoriesAndNatureGame()}
      {useVyshyvankaGame()}
    </>
  );
};
