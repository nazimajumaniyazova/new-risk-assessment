import LangSwitcher from '../../components/LangSwitcher/LangSwitcher';
import ThemeSwitcher from '../../components/ThemeSwitcher/ThemeSwitcher';
import LoginForm from './components/loginForm/LoginForm';
import LoginPreview from './components/loginPreview/LoginPreview';

const Login = () => {
  return (
    <>
      <LoginPreview>
        <div
          style={{
            position: 'absolute',
            right: 'calc(var(--indent16) * 5)',
            top: 'var(--indent16)',
          }}
        >
          <LangSwitcher />
        </div>
        <div
          style={{
            position: 'absolute',
            right: 'var(--indent16)',
            top: 'calc(var(--indent16)*1.2)',
          }}
        >
          <ThemeSwitcher />
        </div>
        <LoginForm />
      </LoginPreview>
    </>
  );
};

export default Login;
