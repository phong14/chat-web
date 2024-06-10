'use client';
import { CssBaseline } from '@mui/material';
import locales from '@mui/material/locale';
import { createTheme, type Theme, type ThemeOptions, ThemeProvider } from '@mui/material/styles';
import { type TypographyOptions } from '@mui/material/styles/createTypography';
import { Poppins } from 'next/font/google';
import { ReactNode, useMemo } from 'react';
import { appConfig } from '@/core/configs';
import { LANGUAGE_CAMEL_CASE_CODE } from '@/shared/constants';
import useLanguage from '@/shared/hooks/useLanguage';
import { CustomShadowProps } from '@/shared/types';
import componentStyleOverrides from './compStyleOverride';
import Palette from './palette';
import customShadows from './shadows';
import Typography from './typography';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

interface Props {
  children: ReactNode;
}

const ThemeCustomization = ({ children }: Props) => {
  const { borderRadius, mode, outlinedFilled, presetColor, rtlLayout } = appConfig.theme;
  const theme: Theme = useMemo<Theme>(() => Palette(mode, presetColor), [mode, presetColor]);
  const fontFamily = poppins.style.fontFamily;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const themeTypography: TypographyOptions = useMemo<TypographyOptions>(
    () => Typography(theme, fontFamily),
    [theme, borderRadius, fontFamily],
  );
  const themeCustomShadows: CustomShadowProps = useMemo<CustomShadowProps>(
    () => customShadows(mode, theme),
    [mode, theme],
  );

  const themeOptions: ThemeOptions = useMemo(
    () => ({
      direction: rtlLayout ? 'rtl' : 'ltr',
      palette: theme.palette,
      mixins: {
        toolbar: {
          minHeight: '48px',
          padding: '16px',
          '@media (min-width: 600px)': {
            minHeight: '48px',
          },
        },
      },
      typography: themeTypography,
      customShadows: themeCustomShadows,
    }),
    [rtlLayout, theme, themeCustomShadows, themeTypography],
  );

  const { language } = useLanguage();
  const camelCaseLocale = LANGUAGE_CAMEL_CASE_CODE[language];
  const themes: Theme = createTheme(themeOptions, locales[camelCaseLocale]);
  themes.components = useMemo(
    () => componentStyleOverrides(themes, borderRadius, outlinedFilled),
    [themes, borderRadius, outlinedFilled],
  );

  return (
    <ThemeProvider theme={themes}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
export default ThemeCustomization;
