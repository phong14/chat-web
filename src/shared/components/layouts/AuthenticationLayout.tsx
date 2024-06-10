'use client';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { PropsWithChildren } from 'react';

const AuthenticationLayout = ({ children }: PropsWithChildren) => {
  return (
    <Grid2
      container
      justifyContent="center"
      alignItems="center"
      sx={{
        minHeight: '100vh',
        background: `linear-gradient(to bottom right, #b98cb3, #B77B97, #B67285 60%)`,
      }}
    >
      {children}
    </Grid2>
  );
};

export default AuthenticationLayout;
