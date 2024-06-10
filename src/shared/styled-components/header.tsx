import { Box, styled, Typography } from '@mui/material';

const HeaderContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  alignItems: 'center',
});

const TypographyDesktop = styled(Typography)(props => ({
  display: 'none',
  [props.theme.breakpoints.up('md')]: {
    display: 'block',
  },
}));

const SideBarMobileContainer = styled('div')(props => ({
  display: 'initial',
  [props.theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

export { HeaderContainer, SideBarMobileContainer, TypographyDesktop };
