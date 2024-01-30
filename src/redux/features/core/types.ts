import { Month, Game } from '@customTypes/game';

export type LevelNode = { path: string, element: React.FC };
export type SingleLevelNode = Pick<LevelNode, 'element'>;
type LevelNodes = [LevelNode, ...LevelNode[]];
type LevelNodeTree = SingleLevelNode | LevelNodes;

type GameNode = {
  game: Game;
  levels: LevelNodeTree;
};
type BookNode = Omit<Game, 'section'> & { section: 'reading' };

type UseGameRoute = () => React.ReactNode;

export type GameStoreCache = Record<Month, Game[]>;
export type GameRegistrator = (route: GameNode) => UseGameRoute;
export type BooksRegistrator = (books: BookNode[]) => () => void;

export function isSingleLevelNode(
  levels: LevelNodeTree,
): levels is SingleLevelNode {
  return !Array.isArray(levels);
}
