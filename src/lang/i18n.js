import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { LOCAL_STORAGE_LANG_KEY } from './LangContext';
import Backend from 'i18next-http-backend';

const lang = localStorage.getItem(LOCAL_STORAGE_LANG_KEY);

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: lang || 'ru',
    debug: false,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
