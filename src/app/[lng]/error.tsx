'use client';

import { INextErrors } from '@/shared/types/system';

const RootError = ({ error }: INextErrors) => {
  return <div>{error.message}</div>;
};

export default RootError;
