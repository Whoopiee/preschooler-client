import { v4 as uuid } from 'uuid';
import { Navigate, Route } from 'react-router-dom';

import { months } from '@customTypes/game';

import { GameOver } from './components/GameOver';
import { GameCore } from './components/GameCore';
import { NextLevelProvider } from './contexts/NextLevelContext';

import {
  BooksRegistrator,
  GameRegistrator,
  GameStoreCache,
  LevelNode,
  SingleLevelNode,
  isSingleLevelNode,
} from './types';
import { AudioLevelProvider } from './contexts/AudioLevelContext';

class GameStore {
  public games: GameStoreCache;

  private static gameOverNode: LevelNode = {
    path: 'game-over',
    element: GameOver,
  };

  constructor() {
    this.games = months.reduce(
      (acc, month) => {
        // eslint-disable-next-line no-param-reassign
        acc[month] = [];

        return acc;
      },
      {} as GameStoreCache,
    );
  }

  private static formLevelPath(path: string | undefined): `../${string}` {
    return path === undefined
      ? `../${GameStore.gameOverNode.path}`
      : `../${path}`;
  }

  private static createLevelElement(
    level: LevelNode | SingleLevelNode,
    nextLevel?: LevelNode,
  ): JSX.Element {
    return (
      <NextLevelProvider
        // key to cause provider re-render for every new level
        key={uuid()}
        nextLevelRoute={
          'path' in level
            ? GameStore.formLevelPath(nextLevel?.path)
            : GameStore.gameOverNode.path
        }
      >
        <AudioLevelProvider>
          <level.element />
        </AudioLevelProvider>
      </NextLevelProvider>
    );
  }

  public registerGame: GameRegistrator = ({ game, levels }) => {
    const { gameOverNode, createLevelElement } = GameStore;

    // step 1: register game data
    this.games[game.month].push(game);

    // step 2: create hook for game routing
    return () => (
      <>
        <Route path={game.slug} element={<GameCore game={game} />}>
          {isSingleLevelNode(levels) ? (
            <Route
              index
              element={createLevelElement(levels)}
            />
          ) : (
            <>
              <Route index element={<Navigate to={levels[0].path} replace />} />
              {levels.map((level, i) => (
                <Route
                  key={level.path}
                  path={level.path}
                  element={createLevelElement(level, levels[i + 1])}
                />
              ))}
            </>
          )}
          <Route
            path={gameOverNode.path}
            element={<gameOverNode.element />}
          />
        </Route>
      </>
    );
  };

  public registerBooks: BooksRegistrator = (books) => () => (
    books.map(book => this.games[book.month].push(book))
  );
}

export const gameStore = new GameStore();
