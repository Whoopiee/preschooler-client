import { gameStore } from '@core/GameStore';

export const useBooks = gameStore.registerBooks([
  {
    slug: 'колобок.pdf',
    section: 'reading',
    month: 'october',
    name: 'Колобок',
    image: 'covers/bookKolobok_cover.png',
  },
  {
    slug: 'коза-дереза.pdf',
    section: 'reading',
    month: 'october',
    name: 'Коза Дереза',
    image: 'covers/bookKozaDereza_cover.png',
  },
  {
    slug: 'убогий-та-багатий.pdf',
    section: 'reading',
    month: 'november',
    name: 'Убогий та багатий',
    image: 'covers/bookUbogiytabagatiy.png',
  },
  {
    slug: 'молодильна-вода.pdf',
    section: 'reading',
    month: 'december',
    name: 'Молодильна вода',
    image: 'covers/young_water.png',
  },
  {
    slug: 'жар-птиця.pdf',
    section: 'reading',
    month: 'december',
    name: 'Жар-птиця',
    image: 'covers/firebird.jpg',
  },
  {
    slug: 'Кирило-Кожумяка.pdf',
    section: 'reading',
    month: 'november',
    name: 'Кирило Кожумяка',
    image: 'covers/bookKogzumyaka_cover.png',
  },
  {
    slug: 'соловейко-чоловік.pdf',
    section: 'reading',
    month: 'january',
    name: 'Як соловейко чоловiка розуму навчив',
    image: 'covers/bookSolovei-cholovik.png',
  },
  {
    slug: 'мудрий-іванко.pdf',
    section: 'reading',
    month: 'january',
    name: 'Мудрий іванко',
    image: 'covers/bookMudryi-ivanko.png',
  },
]);
