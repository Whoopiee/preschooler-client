import { gameStore } from '@core/GameStore';

import { MusicGenresOctoberLevel } from './MusicGenresOctoberLevel';

export const useMusicGenresOctoberGame = gameStore.registerGame({
  game: {
    slug: 'music-genres-october',
    section: 'education',
    filter: 'art',
    month: 'october',
    name: 'Жанри музики',
    image: 'covers/genresMusic.png',
  },
  levels: {
    element: MusicGenresOctoberLevel,
  },
});
