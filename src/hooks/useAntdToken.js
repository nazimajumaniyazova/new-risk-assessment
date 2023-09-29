import { theme as antd_theme } from 'antd';

const useAntdToken = () => {
  const { useToken } = antd_theme;
  const { token } = useToken();

  return {
    token,
  };
};

export default useAntdToken;
