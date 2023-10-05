import { useTimer } from 'react-timer-hook';

const MyTimer = ({ expiryTimestamp, setBtnActive }) => {
  const { seconds, minutes, isRunning } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn('onExpire called'),
  });

  setBtnActive(!isRunning);
  return (
    <>
      <span>{minutes}</span>:<span>{seconds}</span>
    </>
  );
};

export default MyTimer;
