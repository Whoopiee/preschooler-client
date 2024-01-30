import { httpClient } from '../client/httpClient';

class UploadService {
  // eslint-disable-next-line class-methods-use-this
  upload(formData: FormData): Promise<any> {
    const response = httpClient.post('/upload', formData);

    return response;
  }
}

export const uploadService = new UploadService();
