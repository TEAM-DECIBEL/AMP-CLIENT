import { CtaButton } from '@amp/ads-ui';
import { GoogleIcon } from '@amp/ads-ui/icons';
import { ResultView } from '@amp/compositions';

import { IMAGES } from '@shared/assets/images';

import * as styles from './login.css';

const Login = () => {
  const handleLoginClick = () => {
    window.location.href = `${import.meta.env.VITE_HOST_BASE_URL}/oauth2/authorization/google?userType=ORGANIZER`;
  };

  return (
    <div className={styles.container}>
      <ResultView
        title={`흩어져 있던 공연 공지를\n관객에게 가장 가까이`}
        image={<img src={IMAGES.ONBOARDING} alt='로그인 안내 이미지' />}
      />
      <div className={styles.ctaButtonContainer}>
        <CtaButton type='icon' color='white' onClick={handleLoginClick}>
          <GoogleIcon />
          <span>Google로 시작하기</span>
        </CtaButton>
      </div>
    </div>
  );
};

export default Login;
