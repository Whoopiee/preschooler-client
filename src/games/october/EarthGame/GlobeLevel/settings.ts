import Color from 'color';

const earthEastImage = 'objects/earth-east.png';
const earthWestImage = 'objects/earth-west.png';
const audio = 'task/october/globe-level-task.m4a';

const globeTools = [
  {
    color: Color('#2981d9'),
    mark: 'objects/wave.svg',
    markHeight: 22,
    text: 'Синій: водні простори - океани та моря',
  },
  {
    color: Color('#dae9f7'),
    mark: 'objects/ice.svg',
    markHeight: 75,
    text: 'Блакитний: льодовикові та засніжені частини планети',
  },
  {
    color: Color('#19b041'),
    mark: '/objects/rock.svg',
    markHeight: 34,
    text: 'Зелений: гори та гориста місцевість',
  },
  {
    color: Color('#e3c95f'),
    mark: null,
    markHeight: undefined,
    text: 'Жовтий: пусті простори - рівнини',
  },
];

export const globeLevelSettings = {
  earthEastImage,
  earthWestImage,
  globeTools,
  audio,
};
