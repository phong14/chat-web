import { ThemeMode, ThemeName } from '@/shared/enum';

export type AppConfig = typeof appConfig;

export const appConfig = {
  siteName: 'Chat Web',
  theme: {
    borderRadius: 8,
    outlinedFilled: true,
    mode: ThemeMode.LIGHT, // light, dark
    presetColor: ThemeName.DEFAULT, // default, theme1, theme2, theme3, theme4, theme5, theme6
    rtlLayout: false,
    container: false,
  },
};
