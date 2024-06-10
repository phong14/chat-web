import { type DefaultSession } from 'next-auth';
import { AuthenticationProvider, KycVerifyStatus } from '@/shared/enum';

interface IUser {
  userId: string;
  email: string;
  avatarUrl: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  phoneNumberConfirmed: boolean;
  gender: Gender;
  countryId: number;
  kycStatus: KycVerifyStatus;
  alpha2Code: string;
  provider: AuthenticationProvider;
  totalCopierAccounts: number;
  isShowOnboarding: boolean;
  fullName: string;
  referralCode: string;
  referrerCode: string;
}

declare module 'next-auth' {
  interface Session {
    user: {
      theme: string;
      accessToken: string;
    } & DefaultSession['user'] &
      IUser;
  }
  interface User extends Partial<IUser> {
    theme?: string;
    accessToken?: string;
  }
}
