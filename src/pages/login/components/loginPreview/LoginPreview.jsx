import styles from './LoginPreview.module.scss';
import BannerBox from '../BannerBox/BannerBox';
const LoginPreview = (props) => {
  return (
    <div className={styles.Root}>
      <div className={styles.Block}>{props.children}</div>
      <BannerBox />
    </div>
  );
};

export default LoginPreview;
