import styles from './ChangePasswordForm.module.scss';

import { Button, Form, Input } from 'antd';
import { ArrowLeft2 } from 'iconsax-react';
import { useNavigate } from 'react-router-dom';

const ChangePasswordForm = () => {
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
          <div className={styles.title}>Введите номер телефона</div>
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
            placeholder={'Номер телефона'}
            autoComplete="off"
            type="text"
          />
        </Form.Item>

        <div className={styles.buttons_box}>
          {/* <Link to="/login" className={styles.button}>
            <ArrowLeft2 size="32" color="#FF8A65" /> Назад
          </Link> */}
          <Button
            type="link"
            block
            size="large"
            className={styles.button}
            onClick={handleButtonClick}
          >
            <ArrowLeft2 /> Назад
          </Button>
          <Button size="large" type="primary" htmlType="submit">
            Следующий
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ChangePasswordForm;
