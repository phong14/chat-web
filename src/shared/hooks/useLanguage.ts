import { useParams } from 'next/navigation';
import { useMemo } from 'react';
import { fallbackLng, type LanguagesType } from '@/app/i18n/settings';

const useLanguage = () => {
  const { lng } = useParams();

  const language = useMemo(() => {
    return lng || fallbackLng;
  }, [lng]);

  return {
    language: language as LanguagesType,
  };
};

export default useLanguage;
