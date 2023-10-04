import styles from './Preview.module.scss';
import BannerBox from '../BannerBox/BannerBox';
import ThemeSwitcher from '../../../../components/ThemeSwitcher/ThemeSwitcher';
import LangSwitcher from '../../../../components/LangSwitcher/LangSwitcher';

export const Preview = ({ children }) => {
  return (
    <>
      <div className={styles.header}>
        <LangSwitcher />
        <ThemeSwitcher />
      </div>
      <div className={styles.Root}>
        <div className={styles.Block}>{children}</div>
        <BannerBox />
      </div>
    </>
  );
};
