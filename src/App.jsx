import LangSwitcher from './components/LangSwitcher/LangSwitcher';
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import { DatePicker } from 'antd';
function App() {
  const { t } = useTranslation();
  return (
    <div id="root">
      <div></div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>{t('test')}</p>
      </div>
      <ThemeSwitcher></ThemeSwitcher>
      <LangSwitcher></LangSwitcher>
      <DatePicker />
    </div>
  );
}

export default App;
