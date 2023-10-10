import styles from './VerificationCodeForm.module.scss';

import { Button, Form, Input, Typography } from 'antd';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import useLang from '../../../../lang/useLang';
import OtpInput from 'react-otp-input';
import useTheme from '../../../../theme/useTheme';
import MyTimer from './Timer/MyTimer';

const VerificationCodeForm = () => {
  const { t } = useTranslation('verificationCode');
  const { lang } = useLang();
  const { phone } = useParams();
  const { darkMode } = useTheme();
  const navigate = useNavigate();
  const [verificationNumber, setVerificationNumber] = useState('');
  const [btnActive, setBtnActive] = useState(false);

  var getTime = () => {
    var newtime = new Date();
    var times = newtime.setSeconds(newtime.getSeconds() + 60);
    return times;
  };

  const onFinish = (val) => {
    console.log({ ...val, verification_code: verificationNumber });
    navigate('/');
  };

  const handleChange = (value) => {
    setVerificationNumber(value);
  };
  return (
    <div className={styles.root}>
      <Form
        layout={'vertical'}
        autoComplete="off"
        className={styles.form_container}
        onFinish={onFinish}
      >
        <Form.Item>
          <div className={styles.title}>{t('Введите код подтверждения')}</div>
        </Form.Item>

        <Form.Item
          name="verication_code"
          className={styles.formItem}
          rules={[{ required: true, message: '' }]}
        >
          <div
            className={darkMode ? styles.otpInputDark : styles.otpInputLight}
          >
            <OtpInput
              value={verificationNumber}
              onChange={handleChange}
              numInputs={5}
              inputType="number"
              renderInput={(props) => <input maxLength={1} {...props} />}
            />
          </div>
        </Form.Item>

        <Typography
          className={`${styles.descreption} ${lang === 'uz' && styles.reverse}`}
        >
          <span>{t('Вы получите смс код в течение')}</span>
          <span>
            <span className={styles.time}>
              <MyTimer
                expiryTimestamp={getTime}
                setBtnActive={setBtnActive}
                btnActive={btnActive}
              />
            </span>
            {t('на')}
            <span className={styles.bold}>+{phone}</span>
          </span>
        </Typography>

        <Form.Item
          name="password"
          rules={[{ required: true, message: `${t('Пароль не введен!')}` }]}
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
              message: `${t('Пожалуйста, подтвердите свой пароль')}`,
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

        <Form.Item>
          <Button size="large" type="primary" block htmlType="submit">
            {t('Отправить')}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default VerificationCodeForm;
