import { createClient } from './createClient';

export const httpClient = createClient();

httpClient.interceptors.request.use(onRequest);
httpClient.interceptors.response.use(res => res.data);

function onRequest(request: any): any {
  const accessToken = localStorage.getItem('token');

  if (accessToken) {
    // eslint-disable-next-line no-param-reassign
    request.headers.authorization = `Bearer ${accessToken}`;
  }

  return request;
}
