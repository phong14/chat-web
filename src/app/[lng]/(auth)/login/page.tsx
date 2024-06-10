import { Metadata } from 'next';
import React from 'react';
import { setBrowserTabTitle } from '@/core/utils';
import Login from './Login';

export const metadata: Metadata = {
  title: setBrowserTabTitle('Login'),
};

const LoginPage = () => {
  return <Login />;
};

export default LoginPage;
