import styles from './styles/LoginPreview.module.scss';

import useTheme from '../../../../theme/useTheme';
import BannerBox from '../BannerBox/BannerBox';

const LoginPreview = (props) => {
  const { darkMode } = useTheme();
  return (
      <div className={styles.Root}>
        <div className={styles.Block}>{props.children}</div>
          <BannerBox />
      </div>
  );
};

export default LoginPreview;
