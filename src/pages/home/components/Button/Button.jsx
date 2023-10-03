import styles from './Button.module.scss';

import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

function AppButton({ text, route, icon }) {
  const { t } = useTranslation('homePage');
  const navigate = useNavigate();
  const handleButtonClick = () => navigate(route);

  return (
    <Button onClick={handleButtonClick} icon={icon} className={styles.Root}>
      {t(text)}
    </Button>
  );
}

export { AppButton as Button };
