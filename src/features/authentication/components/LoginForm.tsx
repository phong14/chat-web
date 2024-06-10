'use client';
import { yupResolver } from '@hookform/resolvers/yup';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { LoadingButton } from '@mui/lab';
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from '@/app/i18n/client';
import { namespaces } from '@/app/i18n/settings';
import useLanguage from '@/shared/hooks/useLanguage';
import { loginSchema } from '@/shared/schema';
import { FormValuesProps } from '@/shared/types';
import { LoginFormField } from '../types/login';

interface ILoginFormProps extends FormValuesProps<LoginFormField> {}

const LoginForm = ({ loading, onSubmit, errorMessage, defaultValues }: ILoginFormProps) => {
  const theme = useTheme();
  const { language } = useLanguage();
  const { t } = useTranslation(language, [namespaces.authentication, namespaces.general]);
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: {
      errors: { email: errorEmail, password: errorPassword },
    },
  } = useForm<LoginFormField>({
    defaultValues,
    resolver: yupResolver(loginSchema),
  });

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
      <Grid2 container spacing={theme.spacing(3)}>
        <Grid2 xs={12}>
          <FormControl disabled={loading} error={!!errorEmail?.message} fullWidth>
            <OutlinedInput
              {...register('email')}
              startAdornment={<PermIdentityOutlinedIcon />}
              placeholder={t('login.email.placeHolder')}
              size="medium"
            />
            <FormHelperText>{errorEmail?.message}</FormHelperText>
          </FormControl>
        </Grid2>

        <Grid2 xs={12}>
          <FormControl disabled={loading} error={!!errorPassword?.message} fullWidth>
            <OutlinedInput
              {...register('password')}
              type={showPassword ? 'text' : 'password'}
              startAdornment={<LockOutlinedIcon />}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
                  </IconButton>
                </InputAdornment>
              }
              placeholder={t('login.password.placeHolder')}
              size="medium"
            />
            <FormHelperText>{errorPassword?.message}</FormHelperText>
          </FormControl>
        </Grid2>

        <Grid2 xs={12}>
          {errorMessage ? <FormHelperText>{errorMessage}</FormHelperText> : null}
          <LoadingButton loading={loading} fullWidth size="large" variant="contained" type="submit">
            {t('buttons.login', { ns: namespaces.general })}
          </LoadingButton>
        </Grid2>
      </Grid2>
    </form>
  );
};

export default LoginForm;
