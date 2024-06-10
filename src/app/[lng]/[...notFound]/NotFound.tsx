'use client';

import { Typography } from '@mui/material';
import { useTranslation } from '@/app/i18n/client';
import { namespaces } from '@/app/i18n/settings';
import useLanguage from '@/shared/hooks/useLanguage';

const NotFound = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language, namespaces.general);

  return <Typography variant="body1">{t('notFound')}</Typography>;
};

export default NotFound;
