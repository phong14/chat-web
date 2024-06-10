export const isProduction = process.env.NODE_ENV === 'production';
export const isDevelopment = process.env.NODE_ENV === 'development';

export const ENV = {
  API_URL: process.env.NEXT_PUBLIC_API_URL,
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  // Auth
  SCOPE: process.env.NEXT_PUBLIC_SCOPE,
  SECRET_KEY: process.env.NEXT_PUBLIC_SECRET_KEY,
  CLIENT_SECRET_KEY: process.env.NEXT_PUBLIC_CLIENT_SECRET_KEY,
  CRYPTO_KEY_SIZE: process.env.NEXT_PUBLIC_CRYPTO_KEY_SIZE,

  CLIENT_ID: process.env.NEXT_PUBLIC_CLIENT_ID,
};
