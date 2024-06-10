import { type PaletteMode } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import theme1 from 'public/assets/scss/_theme1.module.scss';
import theme2 from 'public/assets/scss/_theme2.module.scss';
import theme3 from 'public/assets/scss/_theme3.module.scss';
import theme4 from 'public/assets/scss/_theme4.module.scss';
import theme5 from 'public/assets/scss/_theme5.module.scss';
import theme6 from 'public/assets/scss/_theme6.module.scss';
import defaultColor from 'public/assets/scss/_themes-vars.module.scss';
import { ThemeMode, ThemeName } from '@/shared/enum';
import { ColorProps } from '@/shared/types';

const Palette = (themeMode: PaletteMode, presetColor: string) => {
  let colors: ColorProps;
  switch (presetColor) {
    case ThemeName.THEME1:
      colors = theme1;
      break;
    case ThemeName.THEME2:
      colors = theme2;
      break;
    case ThemeName.THEME3:
      colors = theme3;
      break;
    case ThemeName.THEME4:
      colors = theme4;
      break;
    case ThemeName.THEME5:
      colors = theme5;
      break;
    case ThemeName.THEME6:
      colors = theme6;
      break;
    case ThemeName.DEFAULT:
    default:
      colors = defaultColor;
  }

  return createTheme({
    palette: {
      mode: themeMode,
      common: {
        black: colors.darkPaper,
      },
      primary: {
        light: themeMode === ThemeMode.DARK ? colors.darkPrimaryLight : colors.primaryLight,
        main: themeMode === ThemeMode.DARK ? colors.darkPrimaryMain : colors.primaryMain,
        dark: themeMode === ThemeMode.DARK ? colors.darkPrimaryDark : colors.primaryDark,
        200: themeMode === ThemeMode.DARK ? colors.darkPrimary200 : colors.primary200,
        800: themeMode === ThemeMode.DARK ? colors.darkPrimary800 : colors.primary800,
      },
      secondary: {
        light: themeMode === ThemeMode.DARK ? colors.darkSecondaryLight : colors.secondaryLight,
        main: themeMode === ThemeMode.DARK ? colors.darkSecondaryMain : colors.secondaryMain,
        dark: themeMode === ThemeMode.DARK ? colors.darkSecondaryDark : colors.secondaryDark,
        200: themeMode === ThemeMode.DARK ? colors.darkSecondary200 : colors.secondary200,
        800: themeMode === ThemeMode.DARK ? colors.darkSecondary800 : colors.secondary800,
      },
      error: {
        light: colors.errorLight,
        main: colors.errorMain,
        dark: colors.errorDark,
      },
      warning: {
        light: colors.warningLight,
        main: colors.warningMain,
        dark: colors.warningDark,
      },
      success: {
        light: colors.successLight,
        200: colors.success200,
        main: colors.successMain,
        dark: colors.successDark,
      },
      grey: {
        50: colors.grey50,
        100: colors.grey100,
        500: themeMode === ThemeMode.DARK ? colors.darkTextSecondary : colors.grey500,
        600: themeMode === ThemeMode.DARK ? colors.darkTextTitle : colors.grey900,
        700: themeMode === ThemeMode.DARK ? colors.darkTextPrimary : colors.grey700,
        900: themeMode === ThemeMode.DARK ? colors.darkTextPrimary : colors.grey900,
      },
      text: {
        primary: themeMode === ThemeMode.DARK ? colors.darkTextPrimary : colors.grey700,
        secondary: themeMode === ThemeMode.DARK ? colors.darkTextSecondary : colors.grey500,
        disabled: colors.grey500,
      },
      divider: themeMode === ThemeMode.DARK ? colors.darkTextPrimary : colors.grey200,
      background: {
        paper: themeMode === ThemeMode.DARK ? colors.darkLevel2 : colors.paper,
        default: themeMode === ThemeMode.DARK ? colors.darkPaper : colors.background,
      },
    },
  });
};

export default Palette;
