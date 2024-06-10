import { appConfig } from '../configs';

export function setBrowserTabTitle(title: string): string {
  return `${title} - ${appConfig.siteName}`;
}
