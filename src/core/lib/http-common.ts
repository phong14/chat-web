import axios, { type AxiosInstance } from 'axios';
import _get from 'lodash/get';
import { getSession, signOut } from 'next-auth/react';
import { LANGUAGE_LONG_CODE } from '@/shared/constants';
import { ENV } from '../configs';
import { routeAuth } from '../routes';
import { languageStorage } from '../utils';

const { API_URL } = ENV;

const apiClient: AxiosInstance = axios.create({
  baseURL: API_URL,
});

apiClient.interceptors.request.use(
  async config => {
    const session = await getSession();

    if (session) {
      const accessToken = _get(session, 'user.accessToken', '');
      const language = languageStorage.getItem();
      apiClient.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
      config.headers['Authorization'] = `Bearer ${accessToken}`;
      config.headers['Accept-Language'] = LANGUAGE_LONG_CODE[language];
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

apiClient.interceptors.response.use(
  async response => {
    return response;
  },
  async error => {
    const status = _get(error, 'response.data.status');
    const errorMessage = _get(error, 'response.data.errorMessage');

    // const callbackUrl = qs.stringify({ redirectUrl: window.location.pathname });
    // const redirect = callbackUrl ? `${routeAuth.login()}?${callbackUrl}` : routeAuth.login();

    if (status === 401 && errorMessage === 'Unauthorized') {
      await signOut({ callbackUrl: routeAuth.login() });
    }
    return Promise.reject(error);
  },
);

export default apiClient;
