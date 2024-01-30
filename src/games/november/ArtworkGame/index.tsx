import { gameStore } from '@core/GameStore';
import { ArtworkLevel } from './ArtworkLevel';

export const useArtworkGame = gameStore.registerGame({
  game: {
    slug: 'artwork',
    section: 'education',
    filter: 'art',
    month: 'november',
    name: 'Вивчаємо натюрморт',
    image: 'covers/naturmort.svg',
  },
  levels: {
    element: ArtworkLevel,
  },
});
