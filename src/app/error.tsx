'use client';

import { INextErrors } from '@/shared/types';

const RootError = ({ error }: INextErrors) => {
  return <div>{error.message}</div>;
};

export default RootError;
