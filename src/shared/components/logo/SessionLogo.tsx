import { Menu, MenuItem } from '@mui/material';
import { signOut } from 'next-auth/react';
import { MouseEvent, useState } from 'react';
import { useTranslation } from '@/app/i18n/client';
import { namespaces } from '@/app/i18n/settings';
import { routeAuth } from '@/core/routes';
import useLanguage from '@/shared/hooks/useLanguage';
import { AvatarCustom } from '@/shared/styled-components/sidebar';

const SessionLogo = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { language } = useLanguage();
  const { t } = useTranslation(language, namespaces.authentication);
  const avatarUrl =
    'https://cdn.dribbble.com/users/18343683/avatars/small/f982ae35c6e58a569a9bffa84525d726.png?1714134254';

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    setAnchorEl(null);
    signOut({ redirect: true, callbackUrl: routeAuth.login() });
  };

  return (
    <>
      <AvatarCustom
        src={avatarUrl}
        alt="avatar user"
        onClick={handleClick}
        style={{ cursor: 'pointer' }}
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>{t('profile')}</MenuItem>
        <MenuItem onClick={handleLogOut}>{t('logout')}</MenuItem>
      </Menu>
    </>
  );
};

export default SessionLogo;
