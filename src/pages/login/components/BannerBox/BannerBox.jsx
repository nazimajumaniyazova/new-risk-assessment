import styles from './BannerBox.module.scss';

import useTheme from '../../../../theme/useTheme';
import bg_light from './assets/bg_light.svg';
import bg_dark from './assets/bg_dark.svg';
import { BannerImage } from '../../../home/components/BannerImage/BannerImage';

const BannerBox = () => {
  const { darkMode } = useTheme();
  return (
    <div
      className={styles.bannerBox}
      style={{ backgroundImage: `url(${darkMode ? bg_dark : bg_light})` }}
    >
      <div className={styles.box}>
        <div className={styles.title}>
          <span>Risk Assessment</span> System
        </div>
        <BannerImage />
      </div>
    </div>
  );
};

export default BannerBox;
