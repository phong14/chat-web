import '@emotion/react';
import type { IThemeAntd } from '@/core/lib/antd/theme-provider';

declare namespace NodeJS {
  interface ProcessEnv {
    NEXTAUTH_URL?: string;
    NEXTAUTH_SECRET?: string;

    NEXT_PUBLIC_API_URL?: string;

    NEXT_PUBLIC_SCOPE?: string;
    NEXT_PUBLIC_SECRET_KEY?: string;
    NEXT_PUBLIC_CLIENT_SECRET_KEY?: string;
    NEXT_PUBLIC_CRYPTO_KEY_SIZE?: string;

    NEXT_PUBLIC_CLIENT_ID?: string;
  }
}
