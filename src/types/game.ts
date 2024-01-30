// order matters
export const months = [
  'october', 'november', 'december',
  'january', 'february', 'march', 'april',
  'may', 'june', 'july', 'august',
  'september',
] as const;
export const sections = ['education', 'games', 'reading'] as const;
export const filters = ['speaking', 'math', 'world', 'society', 'art'] as const;

export type Month = typeof months[number];
export type Section = typeof sections[number];
export type SectionWithStyle = {
  value: Section,
  name: string,
  image: string,
  backgroundColor: string,
  borderColor: string,
  hoverColor: string,
};
export type Filter = typeof filters[number];

export type Game = {
  slug: string;
  section: Section
  filter?: Filter;
  month: Month;
  name: string;
  image: string;
};
