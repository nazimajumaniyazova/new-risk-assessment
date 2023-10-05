import Preview from '../components/Preview/Preview';
import VerificationCodeForm from '../components/verificationCodeForm/VerificationCodeForm';

const VerificationCode = () => {
  return (
    <Preview classname={'reverse'}>
      <VerificationCodeForm />
    </Preview>
  );
};

export default VerificationCode;
