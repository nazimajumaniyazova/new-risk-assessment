import LangSwitcher from '../../components/LangSwitcher/LangSwitcher';
import ThemeSwitcher from '../../components/ThemeSwitcher/ThemeSwitcher';
import ChangePasswordForm from './components/changePasswordForm/ChangePasswordForm';
import ChangePasswordPreview from './components/changePasswordPreview.jsx/ChangePasswordPreview';

const ChangePassword = () => {
  return (
    <>
      <ChangePasswordPreview>
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
        <ChangePasswordForm />
      </ChangePasswordPreview>
    </>
  );
};

export default ChangePassword;
