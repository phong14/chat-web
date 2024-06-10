import { useState } from 'react';
import { ThemeMode } from '../enum';

const useThemeMode = () => {
  const [themeMode, setThemeMode] = useState(ThemeMode.DARK);

  return {
    themeMode,
    setThemeMode,
  };
};

export default useThemeMode;
