import { PRIVATE_ROUTES_PATH, ROUTES_PATH } from './route-paths';

export function addSlashToPath(route: string): string {
  return `/${route}`;
}

export const routeExternal = {
  root: () => {
    return ROUTES_PATH.ROOT;
  },
};

export const routeAuth = {
  login: () => {
    return addSlashToPath(ROUTES_PATH.LOGIN);
  },
  signUp: () => {
    return addSlashToPath(ROUTES_PATH.SIGN_UP);
  },
  errorAuth: () => {
    return addSlashToPath(ROUTES_PATH.ERROR_AUTH);
  },
};

export const routeFeatures = {
  chat: () => {
    return addSlashToPath(PRIVATE_ROUTES_PATH.CHATS);
  },
  videoChat: () => {
    return addSlashToPath(PRIVATE_ROUTES_PATH.VIDEO_CHATS);
  },
  contacts: () => {
    return addSlashToPath(PRIVATE_ROUTES_PATH.CONTACTS);
  },
  folders: () => {
    return addSlashToPath(PRIVATE_ROUTES_PATH.FOLDERS);
  },
  calendar: () => {
    return addSlashToPath(PRIVATE_ROUTES_PATH.CALENDAR);
  },
  favorite: () => {
    return addSlashToPath(PRIVATE_ROUTES_PATH.FAVORITE);
  },
  cloud: () => {
    return addSlashToPath(PRIVATE_ROUTES_PATH.CLOUD);
  },
};

export const routeSettings = {
  root: () => {
    return addSlashToPath(PRIVATE_ROUTES_PATH.SETTINGS);
  },
};
