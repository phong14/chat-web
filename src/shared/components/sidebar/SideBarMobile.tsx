import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Drawer, IconButton, useTheme } from '@mui/material';
import { signOut } from 'next-auth/react';
import { useState } from 'react';
import { routeAuth } from '@/core/routes';
import { AvatarCustom } from '@/shared/styled-components/sidebar';

const SideBarMobile = () => {
  const theme = useTheme();
  const [visible, setVisible] = useState<boolean>(false);
  const avatarUrl =
    'https://cdn.dribbble.com/users/18343683/avatars/small/f982ae35c6e58a569a9bffa84525d726.png?1714134254';

  const handleOpen = () => {
    setVisible(true);
  };

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <>
      <IconButton onClick={handleOpen} style={{ color: theme.palette.common.white }}>
        <MenuOutlinedIcon fontSize="large" />
      </IconButton>
      <Drawer open={visible} onClose={handleClose}>
        <AvatarCustom
          src={avatarUrl}
          alt="avatar user"
          onClick={() => signOut({ redirect: true, callbackUrl: routeAuth.login() })}
          style={{ cursor: 'pointer' }}
        />
      </Drawer>
    </>
  );
};

export default SideBarMobile;
