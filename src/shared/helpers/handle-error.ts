import { AxiosError } from 'axios';
import _get from 'lodash/get';
import _toString from 'lodash/toString';

export function handleResponseErrors(error: unknown) {
  const success = false;
  const data = _get(error, 'response.data.data', null);
  const status = Number(_get(error, 'response.data.status', 500));
  const statusText = _get(
    error,
    'response.data.statusText',
    'An error occurred. Please try again!',
  );
  const errorMessageCode = _get(error, 'response.data.errorMessageCode', 'EXH_ERR_002');
  const errorMessage = _get(
    error,
    'response.data.errorMessage',
    'An error occurred. Please try again!',
  );
  const resultErrors = {
    success,
    data,
    status,
    statusText,
    errorMessage,
    errorMessageCode,
  };
  if (error instanceof AxiosError) {
    return resultErrors;
  } else {
    return {
      ...resultErrors,
      errorMessage: _toString(error),
    };
  }
}
