import { gameStore } from '@core/GameStore';
import { MusicGenresNovemberLevel } from './MusicGenresNovemberLevel';

export const MusicGenresNovemberGame = gameStore.registerGame({
  game: {
    slug: 'music-genres-december',
    section: 'education',
    filter: 'art',
    month: 'november',
    name: 'Жанри музики',
    image: 'covers/genresMusic.png',
  },
  levels: {
    element: MusicGenresNovemberLevel,
  },
});
