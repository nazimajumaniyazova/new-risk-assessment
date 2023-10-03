import styles from './LoginForm.module.scss';
import logo from './assets/logo.svg';


import { Button, Checkbox, Form, Image, Input } from 'antd';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const onFinish = () => {};
  return (
    <div className={styles.root}>
      <Image
        src={logo}
        alt={'logo'}
        width={64}
        className={`${styles.logo} user_select_none`}
      />

      <Form
        layout={'vertical'}
        autoComplete="off"
        className={styles.form_container}
        onFinish={onFinish}
      >
        <Form.Item>
          <div className={styles.title}>Войти в учетную запись</div>
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
            placeholder={'Имя пользователя'}
            autoComplete="off"
            type="text"
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            { required: true, message: '' },
            { whitespace: true, message: '' },
          ]}
        >
          <Input.Password
            size="large"
            autoComplete="new-password"
            placeholder={'Пароль'}
            type="password"
          />
        </Form.Item>

        <Form.Item>
          <Checkbox className="user-select-none">Запомнить</Checkbox>
          <Link className={styles.forgot_password} href="/recovery/index">
            Восстановление пароля
          </Link>
        </Form.Item>

        <Button
          style={{ width: '100%' }}
          size="large"
          type="primary"
          htmlType="submit"
          className={styles.button}
        >
          Войти
        </Button>

        <Form.Item>
          <div className={styles.centered}>
            У вас нет аккаунта?
            <Link to="/signup">Зарегистрироваться в системе</Link>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
