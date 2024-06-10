'use client';
import { Container, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import _toString from 'lodash/toString';
import { useRouter, useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useTranslation } from '@/app/i18n/client';
import { namespaces } from '@/app/i18n/settings';
import { routeFeatures } from '@/core/routes';
import LoginForm from '@/features/authentication/components/LoginForm';
import { LoginFormField } from '@/features/authentication/types/login';
import { encrypted, handleResponseErrors } from '@/shared/helpers';
import useLanguage from '@/shared/hooks/useLanguage';

const Login = () => {
  const theme = useTheme();
  const { language } = useLanguage();
  const { t } = useTranslation(language, namespaces.authentication);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const callbackUrl = searchParams.get('redirectUrl') || routeFeatures.chat();
  const initialValues = {
    password: '',
    email: '',
  };

  const handleLogin = async (values: LoginFormField) => {
    setLoading(true);
    setErrorMessage('');
    try {
      const { email, password } = values;
      const payload: Record<'username' | 'password', string> = {
        username: email.toLowerCase(),
        password: encrypted(password),
      };

      const response = await signIn('credentials', {
        ...payload,
        redirect: false,
        callbackUrl,
      });

      if (response?.error) {
        setLoading(false);
        setErrorMessage(response.error);
      } else {
        router.push(_toString(response?.url));
      }
    } catch (error) {
      const { errorMessage } = handleResponseErrors(error);
      setErrorMessage(errorMessage);
    }
  };

  return (
    <Container maxWidth="xs">
      <Grid2 container spacing={theme.spacing(3)}>
        <Grid2 xs={12}>
          <Typography variant="h2" textAlign="center" style={{ textTransform: 'capitalize' }}>
            {t('login.title')}
          </Typography>
        </Grid2>
        <Grid2 xs={12}>
          <LoginForm
            loading={loading}
            defaultValues={initialValues}
            errorMessage={errorMessage}
            onSubmit={handleLogin}
          />
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default Login;
