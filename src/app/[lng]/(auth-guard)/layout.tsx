import { PropsWithChildren } from 'react';
import MainLayout from '@/shared/components/layouts/MainLayout';

const AuthGuardLayout = ({ children }: PropsWithChildren) => {
  return <MainLayout>{children}</MainLayout>;
};

export default AuthGuardLayout;
