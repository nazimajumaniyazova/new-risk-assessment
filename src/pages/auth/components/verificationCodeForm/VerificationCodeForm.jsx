import styles from './VerificationCodeForm.module.scss';

import { Button, Form, Typography } from 'antd';
import { ArrowRotateRight } from 'iconsax-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import useLang from '../../../../lang/useLang';
import OtpInput from 'react-otp-input';
import useTheme from '../../../../theme/useTheme';
import MyTimer from './Timer/MyTimer';

const VerificationCodeForm = () => {
  const { t } = useTranslation('verificationCode');
  const { lang } = useLang();
  let { phone } = useParams();
  const { darkMode } = useTheme();
  var newtime = new Date();
  var times = newtime.setSeconds(newtime.getSeconds() + 20);
  const [verificationNumber, setVerificationNumber] = useState('');
  const [btnActive, setBtnActive] = useState(false);

  const onFinish = () => {};

  const handleChange = (value) => {
    if (verificationNumber.length < 7) {
      setVerificationNumber(value);
    }
    console.log(value);
  };
  return (
    <div className={styles.root}>
      <Form
        layout={'vertical'}
        autoComplete="off"
        className={styles.form_container}
      >
        <Form.Item>
          <div className={styles.title}>{t('Введите код подтверждения')}</div>
        </Form.Item>

        <Form.Item
          name="username"
          className={styles.formItem}
          rules={[
            { required: true, message: '' },
            { whitespace: true, message: '' },
          ]}
        >
          <div
            className={darkMode ? styles.otpInputDark : styles.otpInputLight}
          >
            <OtpInput
              value={verificationNumber}
              onChange={handleChange}
              numInputs={5}
              inputType="number"
              renderInput={(props) => <input {...props} />}
            />
          </div>
        </Form.Item>

        <Typography
          className={`${styles.descreption} ${lang === 'uz' && styles.reverse}`}
        >
          <span>{t('Вы получите смс код в течение')}</span>
          <span>
            <span className={styles.time}>
              <MyTimer expiryTimestamp={times} setBtnActive={setBtnActive} />
              {t('минут')}
            </span>
            {t('на')}
            <span className={styles.bold}>+{phone}</span>
          </span>
        </Typography>

        <div className={styles.buttons_box}>
          {btnActive ? (
            <Button type="link" size="large" className={styles.button}>
              <ArrowRotateRight size="18px" style={{ marginRight: '10px' }} />
              {t('Отправить повторно')}
            </Button>
          ) : (
            <div></div>
          )}
          <Button size="large" type="primary" onClick={onFinish}>
            {t('Отправить')}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default VerificationCodeForm;
