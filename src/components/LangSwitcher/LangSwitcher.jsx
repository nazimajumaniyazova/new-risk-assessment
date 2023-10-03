import { Button } from 'antd';
import { useTranslation } from 'react-i18next';

import useLang from '../../lang/useLang';

function LangSwitcher() {
  const { t, i18n } = useTranslation();
  const { toggleLang } = useLang();
  const hanleToggleLang = async () => {
    toggleLang();
    i18n.changeLanguage(i18n.language === 'ru' ? 'uz' : 'ru');
  };
  return <Button onClick={hanleToggleLang}>{t('lang')}</Button>;
}

export default LangSwitcher;
