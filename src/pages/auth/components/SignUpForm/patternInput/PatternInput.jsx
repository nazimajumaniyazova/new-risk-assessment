import { PatternFormat } from 'react-number-format';
import useTheme from '../../../../../theme/useTheme';

import styles from './PatternInput.module.scss';

const PatternInput = ({ placeholder, setPhoneNumber, phoneNumber }) => {
  const { darkMode } = useTheme();
  return (
    <PatternFormat
      className={`${styles.inputNum} ${
        !darkMode ? styles.inputLight : styles.inputDark
      } ${phoneNumber.trim() === '+998 (  )' ? '' : styles.filled}`}
      placeholder={placeholder}
      format="+998 (##) ### ## ##"
      allowEmptyFormatting
      onChange={(e) => setPhoneNumber(e.target.value)}
    />
  );
};

export default PatternInput;
