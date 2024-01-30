import { DraggableLocation } from 'react-beautiful-dnd';

function reorder<T>(
  list: T[],
  startIndex: number,
  endIndex: number,
) {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);

  result.splice(endIndex, 0, removed);

  return result;
}

type MoveResult<T> = { [key: string]: T[] };

function move<T>(
  source: T[],
  destination: T[],
  droppableSource: DraggableLocation,
  droppableDestination: DraggableLocation,
): MoveResult<T> {
  const sourceClone = [...source];
  const destinationClone = [...destination];
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destinationClone.splice(droppableDestination.index, 0, removed);

  const result: MoveResult<T> = {};

  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destinationClone;

  return result;
}

export const dndService = {
  reorder,
  move,
};
