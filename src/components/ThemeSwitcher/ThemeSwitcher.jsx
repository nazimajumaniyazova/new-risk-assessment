import { theme as antd_theme, Switch } from 'antd';
import { Moon, Sun1 } from 'iconsax-react';

import styles from './ThemeSwitcher.module.scss';
import useTheme from '../../theme/useTheme';

function ThemeSwitcher() {
  const { useToken } = antd_theme;
  const { token } = useToken();

  const { darkMode, toggleTheme } = useTheme();

  return (
    <Switch
      checkedChildren={
        <Moon
          size={18}
          variant={'Bold'}
          color={darkMode ? token.colorWarning : undefined}
        />
      }
      unCheckedChildren={
        <Sun1 size={18} variant={'Bold'} color={token.colorWarning} />
      }
      defaultChecked={darkMode}
      onChange={toggleTheme}
      className={darkMode ? styles.darkMode : styles.lightMode}
    />
  );
}

export default ThemeSwitcher;
