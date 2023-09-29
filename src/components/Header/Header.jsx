import styles from './Header.module.scss';

import { Layout, theme } from 'antd';

import LangSwitcher from '../LangSwitcher/LangSwitcher';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import Logo from '../Logo/Logo';

const { Header } = Layout;

function AppHeader() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Header
      className={styles.header}
      style={{
        background: colorBgContainer,
      }}
    >
      <Logo className={styles.logo} />
      <LangSwitcher />
      <ThemeSwitcher />
    </Header>
  );
}

export { AppHeader as Header };
