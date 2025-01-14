'use client';
import i18next, { type KeyPrefix, type Namespace } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resourcesToBackend from 'i18next-resources-to-backend';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import {
  type FallbackNs,
  initReactI18next,
  useTranslation as useTranslationOrg,
  type UseTranslationOptions,
  type UseTranslationResponse,
} from 'react-i18next';
import { cookieName, getOptions, languages } from './settings';

const runsOnServerSide = typeof window === 'undefined';

// on client side the normal singleton is ok
// eslint-disable-next-line import/no-named-as-default-member
i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    resourcesToBackend(
      (language: string, namespace: string) => import(`./locales/${language}/${namespace}.json`),
    ),
  )
  .init({
    ...getOptions(),
    lng: undefined,
    detection: {
      order: ['path', 'htmlTag', 'cookie', 'navigator'],
    },
    preload: runsOnServerSide ? languages : [],
  });

export function useTranslation<
  Ns extends Namespace,
  KPrefix extends KeyPrefix<FallbackNs<Ns>> = undefined,
>(
  lng: string,
  ns?: Ns,
  options?: UseTranslationOptions<KPrefix>,
): UseTranslationResponse<FallbackNs<Ns>, KPrefix> {
  // const _cookies = getCookies({ cookies });
  const [cookies, setCookie] = useCookies([cookieName]);

  const ret = useTranslationOrg(ns, options);
  const { i18n } = ret;
  if (runsOnServerSide && lng && i18n.resolvedLanguage !== lng) {
    i18n.changeLanguage(lng);
  } else {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [activeLng, setActiveLng] = useState(i18n.resolvedLanguage);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (activeLng === i18n.resolvedLanguage) {
        return;
      }
      setActiveLng(i18n.resolvedLanguage);
    }, [activeLng, i18n.resolvedLanguage]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (!lng || i18n.resolvedLanguage === lng) {
        return;
      }
      i18n.changeLanguage(lng);
    }, [lng, i18n]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (cookies.language === lng) {
        return;
      }
      setCookie(cookieName, lng, { path: '/' });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lng, cookies.language]);
  }
  return ret;
}
