import { CamelCaseCodeLanguages, Languages, LongCodeLanguages } from '../enum';

export const LANGUAGE_LONG_CODE = {
  [Languages.EN]: LongCodeLanguages.EN,
  [Languages.VI]: LongCodeLanguages.VI,
};

export const LANGUAGE_CAMEL_CASE_CODE = {
  [Languages.EN]: CamelCaseCodeLanguages.EN,
  [Languages.VI]: CamelCaseCodeLanguages.VI,
};

export const KEY_LOCAL_STORAGE_LANGUAGE = 'i18nextLng';

export const languageOptions = [
  { value: Languages.EN, label: 'EN' },
  { value: Languages.VI, label: 'VI' },
];
