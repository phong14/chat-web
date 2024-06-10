import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { IconButton, useTheme } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import dayjs from 'dayjs';
import { useTranslation } from '@/app/i18n/client';
import { namespaces } from '@/app/i18n/settings';
import { FORMAT_FULL_DATE, WIDTH_SIDE_BAR } from '@/shared/constants';
import useLanguage from '@/shared/hooks/useLanguage';
import {
  HeaderContainer,
  SideBarMobileContainer,
  TypographyDesktop,
} from '@/shared/styled-components/header';
import SessionLocalization from '../SessionLocalization';
import SessionNotification from '../SessionNotification';
import SideBarMobile from '../sidebar/SideBarMobile';

const Header = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language, namespaces.general);
  const theme = useTheme();
  const userName = 'Jamaica';
  const currentDay = dayjs(Date.now()).format(FORMAT_FULL_DATE);

  return (
    <HeaderContainer>
      <TypographyDesktop variant="h3" color={theme.palette.common.white}>
        {t('hi', { userName })}
      </TypographyDesktop>
      <TypographyDesktop
        variant="body1"
        fontWeight={600}
        color={theme.palette.common.white}
        style={{ marginLeft: `-${WIDTH_SIDE_BAR}px` }}
      >
        {currentDay}
      </TypographyDesktop>
      <SideBarMobileContainer>
        <SideBarMobile />
      </SideBarMobileContainer>

      <Grid2 container spacing={1}>
        <Grid2>
          <IconButton>
            <SearchOutlinedIcon fontSize="medium" style={{ color: theme.palette.common.white }} />
          </IconButton>
        </Grid2>

        <Grid2>
          <SessionLocalization />
        </Grid2>

        <Grid2>
          <SessionNotification />
        </Grid2>
      </Grid2>
    </HeaderContainer>
  );
};

export default Header;
