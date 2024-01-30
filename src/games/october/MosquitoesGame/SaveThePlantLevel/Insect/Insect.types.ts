type InsectBase = {
  id: string;
  image: string;
  className: string;
  rotate?: number;
  group: 'Tlya' | 'Colorado' | 'None';
};

type Harmful = InsectBase & {
  isHarmful: true;
  isKilled: boolean;
};

export type TInsect = Harmful | InsectBase & {
  isHarmful: false;
};

export function isHarmful(insect: TInsect): insect is Harmful {
  return insect.isHarmful;
}
