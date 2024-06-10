import { languages, LanguagesType } from '@/app/i18n/settings';
import { languageStorage } from '@/core/utils';

export function languageSwitcher(value: LanguagesType) {
  const notSupportLanguage = !languages.some(loc => window.location.pathname.startsWith(`/${loc}`));
  if (notSupportLanguage || typeof window === 'undefined') {
    return;
  }
  languageStorage.setItem(value);
  const split = window.location.pathname.split('/');
  split.splice(1, 1, value);
  const searchParams = window.location.search;

  window.location.replace(`${split.join('/')}${searchParams}`);
}
