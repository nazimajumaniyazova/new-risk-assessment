import styles from './Banner.module.scss';

import { BannerImage } from '../BannerImage/BannerImage';
import useTheme from '../../../../theme/useTheme';

import bg_light from './assets/bg_light.svg';
import bg_dark from './assets/bg_dark.svg';
import useAntdToken from '../../../../hooks/useAntdToken';
import { useTranslation } from 'react-i18next';

const Banner = () => {
  const { darkMode } = useTheme();
  const { token } = useAntdToken();
  const { t } = useTranslation();
  return (
    <div
      className={styles.Root}
      style={{
        // backgroundColor: darkMode ? token.colorBgContainer : undefined,
        backgroundImage: `url(${darkMode ? bg_dark : bg_light})`,
      }}
    >
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.column}>
            <div className={styles.title}>
              <span>Risk Assessment</span> System
            </div>
            <div className={styles.body}>{t('homeText')}</div>
          </div>
          <BannerImage />
        </div>
      </div>
    </div>
  );
};

export default Banner;
