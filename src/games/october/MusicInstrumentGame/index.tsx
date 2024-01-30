import { gameStore } from '@core/GameStore';

import { MusicInstrumentLevel } from './MusicInstrumentLevel';

export const useMusicInstrumentGame = gameStore.registerGame({
  game: {
    slug: 'music-instruments',
    section: 'education',
    filter: 'art',
    month: 'october',
    name: 'Слухаємо музичні інструменти',
    image: 'covers/musicInstr.png',
  },
  levels: {
    element: MusicInstrumentLevel,
  },
});
