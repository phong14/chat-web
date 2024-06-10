import type { AxiosRequestConfig } from 'axios';
import { ENV } from '@/core/configs';
import apiClient from '@/core/lib/http-common';
import { API_VERSION_V2 } from '@/shared/constants';
import { Ecosystem } from '@/shared/enum';
import { handleResponseErrors } from '@/shared/helpers';
import { ApiResponse } from '@/shared/types';
import { transformAuthenticate } from '../mappers/authenticate';
import { IAuthenticate } from '../types/login';
import { endpoints } from './endpoint';
import { ForgotPasswordPayload, ResetPasswordPayload, SignUpPayload, VerifyPayload } from './type';

const { CLIENT_ID, CLIENT_SECRET_KEY, SCOPE } = ENV;

export const authService = {
  login: async (
    payload: Record<'username' | 'password', string>,
  ): Promise<ApiResponse<IAuthenticate>> => {
    const _payload = {
      ...payload,
      client_id: CLIENT_ID ?? '',
      client_secret: CLIENT_SECRET_KEY ?? '',
      scope: SCOPE ?? '',
    };
    const { data } = await apiClient.post(
      endpoints.login(API_VERSION_V2),
      { ..._payload },
      {
        transformResponse: [
          function (response) {
            const { data, ...rest } = JSON.parse(response);
            return { ...rest, data: transformAuthenticate(data) };
          },
        ],
      },
    );

    return data;
  },

  forgotPassword: async (
    payload: ForgotPasswordPayload,
    clientId: Ecosystem,
  ): Promise<ApiResponse<null>> => {
    try {
      const { data } = await apiClient.post(endpoints.forgotPassword(API_VERSION_V2), payload, {
        headers: {
          'client-id': clientId,
        },
      });

      return data;
    } catch (error) {
      const { errorMessage } = handleResponseErrors(error);
      throw new Error(errorMessage);
    }
  },

  resetPassword: async (
    payload: ResetPasswordPayload,
    clientId: Ecosystem,
  ): Promise<ApiResponse<null>> => {
    try {
      const { data } = await apiClient.put(endpoints.resetPassword(API_VERSION_V2), payload, {
        headers: {
          'client-id': clientId,
        },
      });

      return data;
    } catch (error) {
      const { errorMessage } = handleResponseErrors(error);

      throw new Error(errorMessage);
    }
  },

  signUp: async (payload: SignUpPayload, clientId: Ecosystem): Promise<ApiResponse<null>> => {
    try {
      const { data } = await apiClient.post(endpoints.signUp(API_VERSION_V2), payload, {
        headers: {
          'client-id': clientId,
        },
      });

      return data;
    } catch (error) {
      const { errorMessage } = handleResponseErrors(error);

      throw new Error(errorMessage);
    }
  },

  logout: async (config: AxiosRequestConfig) => {
    const { data } = await apiClient.post(endpoints.logout(API_VERSION_V2), null, { ...config });
    return data;
  },

  verifyEmail: async (payload: VerifyPayload, clientId: Ecosystem): Promise<ApiResponse<null>> => {
    try {
      const { data } = await apiClient.post(endpoints.verify(API_VERSION_V2), payload, {
        headers: {
          'client-id': clientId,
        },
      });

      return data;
    } catch (error) {
      const { errorMessage } = handleResponseErrors(error);

      throw new Error(errorMessage);
    }
  },
};
