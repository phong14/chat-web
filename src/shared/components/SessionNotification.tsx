import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import {
  Badge,
  Box,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Popover,
  Typography,
  useTheme,
} from '@mui/material';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { MouseEvent, useState } from 'react';
import { useTranslation } from '@/app/i18n/client';
import { namespaces } from '@/app/i18n/settings';
import useLanguage from '../hooks/useLanguage';
dayjs.extend(relativeTime);

const SessionNotification = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language, namespaces.notification);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <IconButton aria-describedby={id} onClick={handleClick}>
        <Badge color="error" badgeContent={10}>
          <NotificationsOutlinedIcon
            fontSize="medium"
            style={{ color: theme.palette.common.white }}
          />
        </Badge>
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Box style={{ width: '452px' }}>
          <Typography variant="h4" sx={{ p: 2 }}>
            {t('notification')}
          </Typography>

          <List>
            <ListItemButton selected>
              <ListItemText
                primary={
                  <Typography variant="body1" fontWeight={500}>
                    Congratulation! We&apos;re excited to have you as an Affiliate Partner (AP) and
                    excited for you to start your journey with us.
                  </Typography>
                }
                secondary={
                  <Typography variant="subtitle1" textAlign="end" fontSize="12px">
                    {dayjs(Date.now()).fromNow()}
                  </Typography>
                }
              />
            </ListItemButton>
            <ListItemButton>
              <ListItemText
                primary={
                  <Typography variant="body1" fontWeight={500}>
                    Congratulation! We&apos;re excited to have you as an Affiliate Partner (AP) and
                    excited for you to start your journey with us.
                  </Typography>
                }
                secondary={
                  <Typography variant="subtitle1" textAlign="end" fontSize="12px">
                    {dayjs(Date.now()).fromNow()}
                  </Typography>
                }
              />
            </ListItemButton>
          </List>
        </Box>
      </Popover>
    </div>
  );
};

export default SessionNotification;
