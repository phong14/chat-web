import { Metadata } from 'next';
import { setBrowserTabTitle } from '@/core/utils';
import Register from './Register';

export const metadata: Metadata = {
  title: setBrowserTabTitle('Register'),
};

const RegisterPage = () => {
  return <Register />;
};

export default RegisterPage;
