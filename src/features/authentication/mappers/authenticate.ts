import _get from 'lodash/get';
import { IAuthenticate } from '../types/login';

export function transformAuthenticate(data: unknown): IAuthenticate {
  const newData: IAuthenticate = {
    accessToken: _get(data, 'accessToken', ''),
    expiresIn: Number(_get(data, 'expiresIn')),
    tokenType: _get(data, 'tokenType', ''),
    scope: _get(data, 'scope', ''),
  };

  return { ...newData };
}
