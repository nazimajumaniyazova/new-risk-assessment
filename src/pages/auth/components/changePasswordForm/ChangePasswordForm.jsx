import styles from './ChangePasswordForm.module.scss';

import { Button, Form } from 'antd';
import { ArrowLeft2 } from 'iconsax-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import PatternInput from './components/changePasswordForm/components/patternInput/patternInput';

const ChangePasswordForm = () => {
  const { t } = useTranslation('changePasswordPage');
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleButtonClick = () => navigate('/login');

  const onFinish = () => {
    console.log(phoneNumber);
  };
  return (
    <div className={styles.root}>
      <Form
        layout={'vertical'}
        autoComplete="off"
        className={styles.form_container}
      >
        <Form.Item>
          <div className={styles.title}>{t('Введите номер телефона')}</div>
        </Form.Item>

        <Form.Item
          name="username"
          rules={[
            { required: true, message: '' },
            { whitespace: true, message: '' },
          ]}
        >
          <PatternInput
            setPhoneNumber={setPhoneNumber}
            placeholder={t('Номер телефона')}
          />
        </Form.Item>

        <div className={styles.buttons_box}>
          <Button
            type="link"
            size="large"
            className={styles.button}
            onClick={handleButtonClick}
          >
            <ArrowLeft2 /> {t('Назад')}
          </Button>
          <Button size="large" type="primary" onClick={onFinish}>
            {t('Следующий')}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ChangePasswordForm;
