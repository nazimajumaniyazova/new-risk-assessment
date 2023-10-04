import styles from './ChangePasswordForm.module.scss';

import { Button, Form, Input } from 'antd';
import { ArrowLeft2 } from 'iconsax-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ChangePasswordForm = () => {
  const { t } = useTranslation('changePasswordPage');
  const navigate = useNavigate();
  const onFinish = () => {};
  const handleButtonClick = () => navigate('/login');
  return (
    <div className={styles.root}>
      <Form
        layout={'vertical'}
        autoComplete="off"
        className={styles.form_container}
        onFinish={onFinish}
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
          <Input
            size="large"
            placeholder={t('Номер телефона')}
            autoComplete="off"
            type="text"
          />
        </Form.Item>

        <div className={styles.buttons_box}>
          <Button
            type="link"
            block
            size="large"
            className={styles.button}
            onClick={handleButtonClick}
          >
            <ArrowLeft2 /> {t('Назад')}
          </Button>
          <Button size="large" type="primary" htmlType="submit">
            {t('Следующий')}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ChangePasswordForm;
