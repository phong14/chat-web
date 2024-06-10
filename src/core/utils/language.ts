import { fallbackLng, LanguagesType } from '@/app/i18n/settings';
import { KEY_LOCAL_STORAGE_LANGUAGE } from '@/shared/constants';
import { Languages } from '@/shared/enum';

const getItem = (): LanguagesType => {
  return (window.localStorage.getItem(KEY_LOCAL_STORAGE_LANGUAGE) || fallbackLng) as Languages;
};

const setItem = (language: LanguagesType): void => {
  if (language === undefined) {
    return;
  }
  window.localStorage.setItem(KEY_LOCAL_STORAGE_LANGUAGE, language);
};

export const languageStorage = {
  getItem,
  setItem,
};
