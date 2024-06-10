import { Languages } from '@/shared/enum';

export const fallbackLng: string = Languages.EN;
export const languages = [fallbackLng, Languages.VI];
export const defaultNS = 'general';
export const cookieName = 'language';
export const namespaces = {
  general: 'general',
  authentication: 'authentication',
  menu: 'menu',
  notification: 'notification',
};

export type LanguagesType = Languages;

export function getOptions(lng = fallbackLng, ns: string | string[] = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    preload: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
