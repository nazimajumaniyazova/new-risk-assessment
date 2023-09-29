import { useContext } from 'react';
import LangContext, { LOCAL_STORAGE_LANG_KEY } from './LangContext';

function useLang() {
  const { lang, setLang } = useContext(LangContext);

  const toggleLang = () => {
    const newLang = lang === 'ru' ? 'en' : 'ru';

    localStorage.setItem(LOCAL_STORAGE_LANG_KEY, newLang);
    setLang(newLang);
  };
  return { lang, toggleLang };
}

export default useLang;
