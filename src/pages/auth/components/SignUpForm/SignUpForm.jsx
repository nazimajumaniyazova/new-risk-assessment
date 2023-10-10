import styles from './SignUpForm.module.scss';
import './SignUp.scss';

import { useState, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';

import Logo from '../../../../components/Logo/Logo';

import { useTranslation } from 'react-i18next';
import PatternInput from './patternInput/PatternInput';

const SignUpForm = () => {
  const { t } = useTranslation('singupPage');
  const [form] = Form.useForm();
  const [phoneNumber, setPhoneNumber] = useState('+998 (  )');

  const onFinish = () => {
    //console.log(phoneNumber);
    console.log('ddd');
  };
  const validateMessages = {
    required: t('Необходимо заполнить это поле'),
  };
  const values = Form.useWatch('phone', form);
  // const songValue = form.getFieldValue('phone');
  console.log(values);
  // form
  //   .validateFields()
  //   .then((values) => {
  //     console.log(values);
  //   })
  //   .catch((errors) => {
  //     // Do something with errors;
  //   });
  useEffect(() => {
    console.log(values);
    // form
    //   .validateFields({
    //     validateOnly: true,
    //   })
    //   .then((value) => {
    //     console.log('from here', value);
    //   })
    //   .catch((err) => {
    //     console.log('from err', err);
    //   });
  }, [values]);
  return (
    <div className={styles.root}>
      <Logo classNames={styles.logo} />
      <Form
        layout={'vertical'}
        autoComplete="off"
        onFinish={onFinish}
        validateMessages={validateMessages}
        className={'sign-up__form'}
        form={form}
        name="validateOnly"
      >
        <Form.Item>
          <div className={styles.title}>
            {t('Зарегистрироваться в системе')}
          </div>
        </Form.Item>

        <Form.Item name="username" rules={[{ required: true }]}>
          <Input size="large" placeholder={t('Имя пользователя')} type="text" />
        </Form.Item>

        <Form.Item name="phone" rules={[{ required: true, message: 'dd' }]}>
          <PatternInput
            setPhoneNumber={setPhoneNumber}
            placeholder={t('Номер телефона')}
            phoneNumber={phoneNumber}
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true }]}
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
