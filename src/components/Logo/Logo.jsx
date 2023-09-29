import logo from '../../assets/logo.svg';
import styles from './Logo.module.scss';

const Logo = ({ className = '' }) => {
  return (
    <div className={`${styles.row} ${className}`}>
      <img src={logo} alt={'logo'} width={32} />
      <div className={styles.title}>Risk Assessment System</div>
    </div>
  );
};
export default Logo;
