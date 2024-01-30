import { Child } from './Сhild';

export type User = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  Children: Child[];
  token: string;
};
