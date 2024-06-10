import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import FolderIcon from '@mui/icons-material/Folder';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import TextsmsIcon from '@mui/icons-material/Textsms';
import VideocamIcon from '@mui/icons-material/Videocam';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import { useTranslation } from '@/app/i18n/client';
import { namespaces } from '@/app/i18n/settings';
import { routeFeatures, routeSettings } from '@/core/routes';
import { IMenu } from '../types';
import useLanguage from './useLanguage';

const useMenu = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language, namespaces.menu);

  const mainMenus: IMenu[] = [
    {
      label: t('chats'),
      key: routeFeatures.chat(),
      href: routeFeatures.chat(),
      icon: <TextsmsIcon fontSize="large" />,
      showDot: true,
      count: 10,
    },
    {
      label: t('videoChats'),
      key: routeFeatures.videoChat(),
      href: routeFeatures.videoChat(),
      icon: <VideocamIcon fontSize="large" />,
      showDot: true,
    },
    {
      label: t('contacts'),
      key: routeFeatures.contacts(),
      href: routeFeatures.contacts(),
      icon: <SupervisorAccountIcon fontSize="large" />,
    },
    {
      label: t('folders'),
      key: routeFeatures.folders(),
      href: routeFeatures.folders(),
      icon: <FolderIcon fontSize="large" />,
    },
  ];

  const subMenus: IMenu[] = [
    {
      key: routeFeatures.calendar(),
      href: routeFeatures.calendar(),
      icon: <CalendarMonthOutlinedIcon fontSize="medium" />,
    },
    {
      key: routeFeatures.favorite(),
      href: routeFeatures.favorite(),
      icon: <StarOutlineOutlinedIcon fontSize="medium" />,
    },
    {
      key: routeSettings.root(),
      href: routeSettings.root(),
      icon: <SettingsOutlinedIcon fontSize="medium" />,
    },
    {
      key: routeFeatures.cloud(),
      href: routeFeatures.cloud(),
      icon: <WorkOutlineOutlinedIcon fontSize="medium" />,
    },
  ];

  return { mainMenus, subMenus };
};

export default useMenu;
