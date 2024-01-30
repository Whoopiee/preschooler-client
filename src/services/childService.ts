import { INewChildForm } from '@components/NewChildForm';
import { httpClient } from '../client/httpClient';
import { ChildEdit } from '../types/Сhild';

async function create(formData: INewChildForm): Promise<any> {
  return httpClient.post('/child', formData);
}

async function update(formData: ChildEdit): Promise<any> {
  return httpClient.patch('/child/updateChild', formData);
}

async function updatePhoto(formData: string, id: number): Promise<any> {
  const data = { id, photo: formData };

  return httpClient.patch('/child/updatePhoto', data);
}

export const childService = {
  create,
  update,
  updatePhoto,
};
