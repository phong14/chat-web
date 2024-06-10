import {
  Avatar,
  Badge,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material';
import Link from 'next/link';
import { appConfig } from '@/core/configs';
import { IMenu } from '@/shared/types';

interface IMenuItemProps extends IMenu {
  active: boolean;
}

const MenuItem = ({ href, icon, label, src, target, active, showDot, count }: IMenuItemProps) => {
  const { borderRadius } = appConfig.theme;
  const theme = useTheme();

  const badgeContent = () => {
    if (count) {
      return count;
    }
    if (showDot) {
      return showDot;
    }

    return 0;
  };

  return (
    <ListItemButton
      LinkComponent={Link}
      selected={active}
      sx={{
        borderRadius: `${borderRadius}px`,
        color: theme.palette.common.white,
        flexDirection: 'column',
      }}
      href={href}
      target={target}
    >
      <ListItemIcon
        sx={{
          my: 'auto',
          minWidth: 24,
          color: 'inherit',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {icon ? (
          <Badge
            color="error"
            overlap="circular"
            variant={count ? 'standard' : 'dot'}
            badgeContent={badgeContent()}
          >
            {icon}
          </Badge>
        ) : null}
        {src ? <Avatar alt="chat icon" src={src} style={{ background: 'transparent' }} /> : null}
      </ListItemIcon>
      {label ? (
        <ListItemText
          style={{ marginBottom: 0 }}
          primary={
            <Typography
              variant="caption"
              fontWeight={500}
              color={active ? theme.palette.common.black : 'inherit'}
              textAlign="center"
              whiteSpace="nowrap"
              textOverflow="ellipsis"
              style={{ width: 74 }}
              display="inline-block"
              overflow="hidden"
            >
              {label}
            </Typography>
          }
        />
      ) : null}
    </ListItemButton>
  );
};

export default MenuItem;
