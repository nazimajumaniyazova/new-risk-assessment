import { useState } from 'react';
import { ConfigProvider, theme as antd_theme, Layout, Typography } from 'antd';
import ThemeContext, { LOCAL_STORAGE_THEME_KEY } from './ThemeContext';

const isDarkTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);

function ThemeProvider({ children }) {
  const { defaultAlgorithm, darkAlgorithm } = antd_theme;

  const [darkMode, setDarkMode] = useState(
    isDarkTheme === 'true' ? true : false
  );

  const theme = {
    algorithm: darkMode ? darkAlgorithm : defaultAlgorithm,
    token: {
      wireframe: true,
      colorWarning: '#ffc700',
      fontSize: 14,
      borderRadius: 6,
      colorPrimary: '#316ce6',
      colorSuccess: '#50cd89',
      colorError: '#f1416c',
      colorInfo: '#62a4e1',
    },
  };

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <ConfigProvider
        theme={{
          ...theme,
          components: {
            Switch: {
              colorPrimary: '#141414',
            },
          },
        }}
      >
        <Layout className="app">
          <Typography> {children}</Typography>
        </Layout>
      </ConfigProvider>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
