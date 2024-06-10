import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import { Divider, useTheme } from '@mui/material';
import _map from 'lodash/map';
import { usePathname } from 'next/navigation';
import useMenu from '@/shared/hooks/useMenu';
import { MenuContainer, SideBarContainer } from '@/shared/styled-components/sidebar';
import MenuItem from '../baseUI/MenuItem';
import SessionLogo from '../logo/SessionLogo';

const SideBar = () => {
  const theme = useTheme();

  const { mainMenus, subMenus } = useMenu();

  const pathname = usePathname();
  const pathNameSplit = pathname.split('/');
  const currentRoute = `/${pathNameSplit[pathNameSplit.length - 1]}`;

  return (
    <SideBarContainer>
      <SessionLogo />

      <MenuContainer>
        {_map(mainMenus, menu => (
          <MenuItem {...menu} active={currentRoute === menu.key} />
        ))}
      </MenuContainer>

      <div style={{ width: '100%' }}>
        <Divider />
      </div>

      <MenuContainer>
        {_map(subMenus, menu => (
          <MenuItem {...menu} active={currentRoute === menu.key} />
        ))}
      </MenuContainer>

      <TextsmsOutlinedIcon style={{ color: theme.palette.common.white, fontSize: '42px' }} />
    </SideBarContainer>
  );
};

export default SideBar;
