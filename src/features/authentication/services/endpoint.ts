import { ENV } from '@/core/configs';
import { API_COLLECTION } from '@/shared/constants';
import { ApiVersion } from '@/shared/types';

const { API_URL } = ENV;

export const endpoints = {
  login: ({ version }: ApiVersion) =>
    `${API_URL}/${API_COLLECTION.AUTH}/api/${version}/Authenticate/Login`,
  forgotPassword: ({ version }: ApiVersion) =>
    `${API_URL}/${API_COLLECTION.AUTH}/api/${version}/Authenticate/ForgotPassword`,
  resetPassword: ({ version }: ApiVersion) =>
    `${API_URL}/${API_COLLECTION.AUTH}/api/${version}/Authenticate/ResetPassword`,
  signUp: ({ version }: ApiVersion) =>
    `${API_URL}/${API_COLLECTION.AUTH}/api/${version}/Authenticate/Register`,
  logout: ({ version }: ApiVersion) =>
    `${API_URL}/${API_COLLECTION.AUTH}/api/${version}/Authenticate/Logout`,
  verify: ({ version }: ApiVersion) =>
    `${API_URL}/${API_COLLECTION.AUTH}/api/${version}/Authenticate/VerifyEmail`,
};
