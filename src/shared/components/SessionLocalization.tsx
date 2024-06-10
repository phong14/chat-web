import GTranslateOutlinedIcon from '@mui/icons-material/GTranslateOutlined';
import { IconButton, Menu, MenuItem, useTheme } from '@mui/material';
import _map from 'lodash/map';
import { MouseEvent, useState } from 'react';
import { languageOptions } from '../constants';
import { languageSwitcher } from '../helpers/language-switcher';
import useLanguage from '../hooks/useLanguage';

const SessionLocalization = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const { language } = useLanguage();

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <GTranslateOutlinedIcon fontSize="medium" style={{ color: theme.palette.common.white }} />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {_map(languageOptions, ({ label, value }, index) => (
          <MenuItem
            selected={language === value}
            key={index}
            onClick={() => languageSwitcher(value)}
          >
            {label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default SessionLocalization;
