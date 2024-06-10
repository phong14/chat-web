import { Avatar, Box, styled } from '@mui/material';
import { AVATAR_SIZE_LARGE } from '../themes';

const SideBarContainer = styled(Box)(props => ({
  display: 'none',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  [props.theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const AvatarCustom = styled(Avatar)(props => ({
  width: AVATAR_SIZE_LARGE,
  height: AVATAR_SIZE_LARGE,
  borderWidth: 2,
  borderStyle: 'solid',
  borderColor: props.theme.palette.common.white,
}));

const MenuContainer = styled('nav')(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
}));

const DotMenuContainer = styled('div')(() => ({
  position: 'relative',
}));

const DotMenu = styled('div')(props => ({
  position: 'absolute',
  top: 1,
  right: 1,
  width: 10,
  height: 10,
  backgroundColor: props.theme.palette.background.paper + 60,
  borderRadius: '50%',
  ':before': {
    position: 'absolute',
    content: '""',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 5,
    height: 5,
    backgroundColor: props.theme.palette.primary.main,
    borderRadius: '50%',
  },
}));

export { AvatarCustom, DotMenu, DotMenuContainer, MenuContainer, SideBarContainer };
