import { Kindergarten } from '@customTypes/child';

export interface INewChildForm {
  firstName: string;
  lastName: string;
  age: number | null;
  isAttending: boolean;
  kindergarten: Kindergarten | null;
  photo: File | string | null; // sorry for this, thats a large kostyl', pizdec stidno za ce
  parentId: number | null;
  sexId: number,
}
