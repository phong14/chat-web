import { type Theme } from '@mui/material/styles';
import { type TypographyOptions } from '@mui/material/styles/createTypography';

const Typography = (theme: Theme, fontFamily: string): TypographyOptions => ({
  fontFamily,
  h6: {
    fontWeight: 500,
    color: theme.palette.grey[600],
    fontSize: '0.75rem',
  },
  h5: {
    fontSize: '0.875rem',
    color: theme.palette.grey[600],
    fontWeight: 500,
  },
  h4: {
    fontSize: '1rem',
    color: theme.palette.grey[600],
    fontWeight: 600,
  },
  h3: {
    fontSize: '1.25rem',
    color: theme.palette.grey[600],
    fontWeight: 600,
  },
  h2: {
    fontSize: '1.5rem',
    color: theme.palette.grey[600],
    fontWeight: 700,
  },
  h1: {
    fontSize: '2.125rem',
    color: theme.palette.grey[600],
    fontWeight: 700,
  },
  subtitle1: {
    fontSize: '0.875rem',
    fontWeight: 500,
    color: theme.palette.text.disabled,
  },
  subtitle2: {
    fontSize: '0.75rem',
    fontWeight: 400,
    color: theme.palette.text.secondary,
  },
  caption: {
    fontSize: '0.75rem',
    color: theme.palette.text.secondary,
    fontWeight: 400,
  },
  body1: {
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: '1.334em',
  },
  body2: {
    letterSpacing: '0em',
    fontWeight: 400,
    lineHeight: '1.5em',
    color: theme.palette.text.primary,
  },
  button: {
    textTransform: 'capitalize',
  },
});

export default Typography;
