import logo from '../../assets/logo.svg';
import styles from './Logo.module.scss';

const Logo = ({ classNames = '', hasText = false }) => {
  return (
    <div className={`${styles.row} ${classNames}`}>
      <img src={logo} alt={'logo'} />
      {hasText && <div className={styles.title}>Risk Assessment System</div>}
    </div>
  );
};
export default Logo;
