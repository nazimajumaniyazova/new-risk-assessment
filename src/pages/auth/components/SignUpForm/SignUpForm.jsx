import styles from './SignUpForm.module.scss';
import './SignUp.scss';

import { Form, Input, Button, InputNumber } from 'antd';
import { Link } from 'react-router-dom';

import Logo from '../../../../components/Logo/Logo';

import { useTranslation } from 'react-i18next';

const SignUpForm = () => {
  const { t } = useTranslation('singupPage');
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };
  const validateMessages = {
    required: t('Необходимо заполнить это поле'),
  };

  return (
    <div className={styles.root}>
      <Logo classNames={styles.logo} />
      <Form
        layout={'vertical'}
        autoComplete="off"
        onFinish={onFinish}
        validateMessages={validateMessages}
        className={`${styles.form} sign-up__form`}
        form={form}
        name="validateOnly"
      >
        <Form.Item>
          <div className={styles.title}>
            {t('Зарегистрироваться в системе')}
          </div>
        </Form.Item>

        <Form.Item name="username" rules={[{ required: true }]}>
          <Input
            size="large"
            placeholder={t('Имя пользователя')}
            type="text"
            autoComplete="off"
          />
        </Form.Item>

        <Form.Item
          name="phone"
          rules={[
            {
              required: true,
            },
            {
              pattern: /^[\d]{9,9}$/,
              message: t('Номер должен состоять из 9 символов'),
            },
          ]}
        >
          <InputNumber
            addonBefore="+998"
            placeholder={t('Номер телефона')}
            size="large"
            style={{ width: '100%' }}
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            { required: true },
            {
              pattern:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/,
              message: t('Пароль не соответствует следующим правилам'),
            },
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

        <p className={styles.infoText}>{t('Условия')}</p>

        <Form.Item
          name="confirm"
          dependencies={['password']}
          hasFeedback
          style={{ marginBottom: '10px' }}
          rules={[
            {
              required: true,
              message: t('Пожалуйста, подтвердите свой пароль'),
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error(t('Пароль, который вы ввели, не соответствует!'))
                );
              },
            }),
          ]}
        >
          <Input.Password
            placeholder={t('Подтверждение пароля')}
            size="large"
            autoComplete="off"
          />
        </Form.Item>

        <p className={styles.infoText}>
          {t('Для подтверждения введите пароль ещё раз')}
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
            {t('У вас есть аккаунт')}
            <Link to="/login"> {t('Войти')}</Link>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUpForm;
