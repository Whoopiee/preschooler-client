import { ILevel } from '@customTypes/ILevel';

export interface DragElement {
  id: string,
  parentId?: string,
  image: string,
  x?: string,
  y?: string,
}

export interface StrictDragElements {
  id: string,
  countStatic?: number,
  imageStatic?: string,
  elements: DragElement[],
}

export interface DropContainer {
  id: string,
  data: DragElement[],
  top: number,
  right: number,
  bottom: number,
  left: number,
}

export interface IDropTemplate extends ILevel {
  zonesNumber: number,
  dragItems: DragElement[] | StrictDragElements[],
  strict?: boolean,
  staticData?:
  {
    prop: DragElement[],
  }[],
}
