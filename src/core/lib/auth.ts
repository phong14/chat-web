import { jwtDecode } from 'jwt-decode';
import _get from 'lodash/get';
import { type NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { authService } from '@/features/authentication/services';
import { handleResponseErrors } from '@/shared/helpers';
import { ENV } from '../configs';
import { routeAuth } from '../routes';
import apiClient from './http-common';

const { NEXTAUTH_SECRET } = ENV;

type CredentialsType = Record<'username' | 'password', string> | undefined;

if (!NEXTAUTH_SECRET) {
  throw new Error('Please provide process.env.NEXTAUTH_SECRET environment variable');
}

export const authOptions = {
  session: { strategy: 'jwt', maxAge: 3600 * 4 },
  secret: NEXTAUTH_SECRET,
  pages: { signIn: routeAuth.login(), newUser: routeAuth.signUp(), error: routeAuth.errorAuth() },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials: CredentialsType) => {
        try {
          if (!credentials?.username || !credentials?.password) {
            throw new Error('Please enter an username and password');
          }

          const { data } = await authService.login({ ...credentials });
          const accessToken = _get(data, 'accessToken', '');
          const expiresIn = _get(data, 'expiresIn');
          const tokenDecode = jwtDecode(accessToken);
          const id = _get(tokenDecode, 'user_id', '');
          const email = _get(tokenDecode, 'email', '');

          const result = data ? { ...data, id, email, expiresIn } : null;
          return result;
        } catch (error) {
          const { errorMessage } = handleResponseErrors(error);
          throw new Error(errorMessage);
        }
      },
    }),
  ],
  callbacks: {
    signIn: async ({ account }) => {
      if (!account) {
        return true;
      }

      return true;
    },

    jwt: async ({ token, user, trigger, session, account }) => {
      if (trigger === 'update' && session?.user) {
        return { ...token, ...session.user };
      }

      if (account) {
        apiClient.defaults.headers.common.Authorization = `Bearer ${token.accessToken}`;
      }

      if (user) {
        return {
          ...token,
          ...user,
        };
      }

      return token;
    },

    session: async ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session?.user,
          ...token,
        },
      };
    },
  },
  events: {
    signOut: async ({ token }) => {
      try {
        await authService.logout({
          headers: { Authorization: `Bearer ${token?.accessToken}` },
        });
      } catch (error) {
        const { errorMessage } = handleResponseErrors(error);
        throw new Error(errorMessage);
      }
    },
  },
  cookies: {
    pkceCodeVerifier: {
      name: 'next-auth.pkce.code_verifier',
      options: {
        httpOnly: true,
        sameSite: 'none',
        path: '/',
        secure: true,
      },
    },
  },
} satisfies NextAuthOptions;
