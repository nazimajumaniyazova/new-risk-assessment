import { createContext } from 'react';

export const initialLangState = {
  lang: 'ru',
  setLang: () => null,
};

export const LOCAL_STORAGE_LANG_KEY = 'lang';

const LangContext = createContext(initialLangState);

export default LangContext;
