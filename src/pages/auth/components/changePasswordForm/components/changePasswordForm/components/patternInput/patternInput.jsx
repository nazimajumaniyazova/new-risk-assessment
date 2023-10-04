import { PatternFormat } from 'react-number-format';
import useTheme from '../../../../../../../../theme/useTheme';
import styles from './patternInput.module.scss';

const PatternInput = ({ placeholder, setPhoneNumber }) => {
  const { darkMode } = useTheme();
  return (
    <PatternFormat
      className={!darkMode ? styles.inputLight : styles.inputDark}
      placeholder={placeholder}
      format="+998 (##) ### ## ##"
      allowEmptyFormatting
      onChange={(e) => setPhoneNumber(e.target.value)}
    />
  );
};

export default PatternInput;
