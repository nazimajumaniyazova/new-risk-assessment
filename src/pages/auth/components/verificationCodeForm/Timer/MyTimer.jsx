import styles from './MyTimer.module.scss';

import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { useTimer } from 'react-timer-hook';
import { ArrowRotateRight } from 'iconsax-react';
import useLang from '../../../../../lang/useLang';
import { useEffect } from 'react';

const MyTimer = ({ expiryTimestamp, setBtnActive, btnActive }) => {
  const { t } = useTranslation('verificationCode');
  const { lang } = useLang();

  const { seconds, minutes, isRunning, restart } = useTimer({
    expiryTimestamp,
  });

  useEffect(() => {
    setBtnActive(!isRunning);
  }, [isRunning]);

  return (
    <>
      <span>{minutes}</span>:
      <span>
        {seconds} {t('минут')}
      </span>
      {btnActive ? (
        <Button
          type="link"
          danger
          size="large"
          className={lang === 'uz' ? styles.buttonUz : styles.buttonRu}
          onClick={() => {
            const time = new Date();
            time.setSeconds(time.getSeconds() + 60);
            restart(time);
          }}
        >
          <ArrowRotateRight size="14px" style={{ marginRight: '5px' }} />
          {t('Отправить повторно')}
        </Button>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default MyTimer;
