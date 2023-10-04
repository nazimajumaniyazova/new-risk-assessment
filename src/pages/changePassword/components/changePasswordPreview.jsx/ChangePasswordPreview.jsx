import BannerBox from '../../../auth/components/BannerBox/BannerBox';
import styles from './ChangePasswordPreview.module.scss';
const ChangePasswordPreview = (props) => {
  return (
    <div className={styles.Root}>
      <div className={styles.Block}>{props.children}</div>
      <BannerBox />
    </div>
  );
};

export default ChangePasswordPreview;
