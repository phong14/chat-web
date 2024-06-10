'use client';
import NextTopLoader from 'nextjs-toploader';
import React from 'react';

const Providers = ({ children }: React.PropsWithChildren) => {
  const colorPrimary = '#f7a5bc';

  return (
    <>
      <NextTopLoader color={colorPrimary} showSpinner={false} />
      {children}
    </>
  );
};

export default Providers;
