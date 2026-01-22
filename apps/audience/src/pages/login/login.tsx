import { useNavigate } from 'react-router';

import { CtaButton } from '@amp/ads-ui';
import { GoogleIcon } from '@amp/ads-ui/icons';
import { ENV } from '@amp/apis';
import { ResultView } from '@amp/compositions';
import { OAUTH_PATH } from '@amp/shared/constants';

import { IMAGES } from '@shared/assets';
import { ROUTE_PATH } from '@shared/constants/path';

import * as styles from './login.css';

const Login = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    window.location.assign(`${ENV.AUDIENCE_BASE_URL}${OAUTH_PATH.GOOGLE}`);
  };

  const handleSkipLogin = () => {
    navigate(ROUTE_PATH.HOME);
  };
  return (
    <div className={styles.container}>
      <ResultView
        title={`작은 공지도 크게 울리는\n공연 공지의 공식, AMP`}
        image={<img src={IMAGES.ONBOARDING} alt='' />}
      />
      <div className={styles.ctaButtonContainer}>
        <CtaButton type='icon' color='white' onClick={handleLoginClick}>
          <GoogleIcon />
          <span>Google로 시작하기</span>
        </CtaButton>
      </div>
      <button
        type='button'
        onClick={handleSkipLogin}
        className={styles.skipButton}
      >
        로그인 없이 공지 확인하기
      </button>
    </div>
  );
};

export default Login;
