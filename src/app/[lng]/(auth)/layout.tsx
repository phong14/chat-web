import { PropsWithChildren } from 'react';
import AuthenticationLayout from '@/shared/components/layouts/AuthenticationLayout';

const AuthLayout = ({ children }: PropsWithChildren) => {
  return <AuthenticationLayout>{children}</AuthenticationLayout>;
};

export default AuthLayout;
