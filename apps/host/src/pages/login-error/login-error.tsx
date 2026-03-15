import { useNavigate } from 'react-router';

import { CtaButton } from '@amp/ads-ui';
import { ResultView } from '@amp/compositions';

import { IMAGES } from '@shared/assets/images';

import * as styles from './login-error.css';

const LoginError = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(-1);
  };
  return (
    <div className={styles.container}>
      <ResultView
        title='로그인이 필요한 기능이에요!'
        description='로그인하고 기능을 계속 이용해보세요.'
        image={<img src={IMAGES.LOGIN_ERROR} alt='' />}
      />
      <div className={styles.ctaButtonContainer}>
        <CtaButton type='common' color='gray' onClick={handleButtonClick}>
          돌아가기
        </CtaButton>
      </div>
    </div>
  );
};

export default LoginError;
