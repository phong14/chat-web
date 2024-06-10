import { Box, styled } from '@mui/material';

const MainLayoutContainer = styled(Box)(props => ({
  display: 'flex',
  minHeight: '100vh',
  background: `linear-gradient(to bottom right, #b98cb3, #B77B97, #B67285 60%)`,
  padding: props.theme.spacing(2),
  gap: props.theme.spacing(2),
}));

const MainContainer = styled(Box)(props => ({
  display: 'flex',
  flexDirection: 'column',
  gap: props.theme.spacing(1),
  width: '100%',
}));

export { MainContainer, MainLayoutContainer };
