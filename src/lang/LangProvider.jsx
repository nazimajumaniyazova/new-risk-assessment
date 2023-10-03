import { useState } from 'react';
import { ConfigProvider } from 'antd';
import ruRU from 'antd/locale/ru_RU';
import uzUZ from 'antd/locale/uz_UZ';

import LangContext, { LOCAL_STORAGE_LANG_KEY } from './LangContext';

const savedLang = localStorage.getItem(LOCAL_STORAGE_LANG_KEY);

function LangProvider({ children }) {
  const [lang, setLang] = useState(savedLang);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <ConfigProvider locale={ruRU}>{children}</ConfigProvider>
    </LangContext.Provider>
  );
}

export default LangProvider;
