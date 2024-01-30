export type Child = {
  id: number;
  age: number;
  firstName: string;
  lastName: string;
  parentId: number;
  sexId: number;
  photo: string;
};

export interface ChildType {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  sexId: number;
  doshkillyaId: string;
  numberDoshkillya: string;
  photo: string;
  isMale: boolean;
}

export interface ChildEdit {
  age: number,
  firstName: string,
  lastName: string,
  sexId: number,
  photo: string,
}

export interface ChildTypeWithoutPhoto {
  firstName: string;
  id: number;
  lastName: string;
  age: number;
  sexId: number;
  doshkillyaId: string;
  numberDoshkillya: string;
  isMale: boolean;
  parentId: number;
}
