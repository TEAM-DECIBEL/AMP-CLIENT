import { CtaButton } from '@amp/ads-ui';
import { GoogleIcon } from '@amp/ads-ui/icons';
import { ENV } from '@amp/apis';
import { ResultView } from '@amp/compositions';
import { OAUTH_PATH } from '@amp/shared/constants';

import { IMAGES } from '@shared/assets/images';

import * as styles from './login.css';

const Login = () => {
  const handleLoginClick = () => {
    window.location.href = `${ENV.HOST_BASE_URL}${OAUTH_PATH.GOOGLE}?userType=ORGANIZER`;
  };

  return (
    <div className={styles.container}>
      <ResultView
        title={`작은 공지도 크게 울리는\n공연 공지의 공식, AMP`}
        image={<img src={IMAGES.ONBOARDING} />}
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
