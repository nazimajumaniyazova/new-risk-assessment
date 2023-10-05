import styles from './SignUpForm.module.scss';

import { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';

import Logo from '../../../../components/Logo/Logo';

import { useTranslation } from 'react-i18next';
import PatternInput from './patternInput/PatternInput';

const SignUpForm = () => {
  const { t } = useTranslation('loginPage');

  const [phoneNumber, setPhoneNumber] = useState('');

  const onFinish = () => {
    console.log(phoneNumber);
  };

  return (
    <div className={styles.root}>
      <Logo classNames={styles.logo} />
      <Form layout={'vertical'} autoComplete="off" onFinish={onFinish}>
        <Form.Item>
          <div className={styles.title}>
            {t('Зарегистрироваться в системе')}
          </div>
        </Form.Item>

        <Form.Item
          name="username"
          rules={[
            { required: true, message: '' },
            { whitespace: true, message: '' },
          ]}
        >
          <Input size="large" placeholder={t('Имя пользователя')} type="text" />
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
            phoneNumber={phoneNumber}
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            { required: true, message: '' },
            { whitespace: true, message: '' },
          ]}
          style={{ marginBottom: '10px' }}
        >
          <Input.Password
            size="large"
            autoComplete="new-password"
            placeholder={t('Пароль')}
            type="password"
          />
        </Form.Item>
        <p className={styles.infoText}>
          Пароль должен содержать от 8 до 16 символов, включая как минимум одну
          строчную, одну заглавную букву, одну цифру и один спецсимвол
          [@$!%*#?&_^+-=]
        </p>
        <Form.Item
          name="confirm"
          dependencies={['password']}
          hasFeedback
          style={{ marginBottom: '10px' }}
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error('Пароль, который вы ввели, не соответствует!')
                );
              },
            }),
          ]}
        >
          <Input.Password placeholder="Подтверждение пароля" size="large" />
        </Form.Item>
        <p className={styles.infoText}>
          Для подтверждения введите пароль ещё раз
        </p>

        <Button
          style={{ width: '100%', marginTop: '2rem' }}
          size="large"
          type="primary"
          htmlType="submit"
        >
          {t('Зарегистрироваться')}
        </Button>

        <Form.Item>
          <div className={styles.centered}>
            {t('У вас есть аккаунт')}?<Link to="/signup"> {t(' Войти')}</Link>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUpForm;
