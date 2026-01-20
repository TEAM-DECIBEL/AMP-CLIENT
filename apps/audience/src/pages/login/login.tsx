import { useNavigate } from 'react-router';

import { CtaButton } from '@amp/ads-ui';
import { GoogleIcon } from '@amp/ads-ui/icons';
import { ResultView } from '@amp/compositions';

import { IMAGES } from '@shared/assets';
import { ROUTE_PATH } from '@shared/constants/path';

import * as styles from './login.css';

const Login = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    //TODO: API 연결
  };

  const handleClick = () => {
    navigate(ROUTE_PATH.HOME);
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
      <button type='button' onClick={handleClick} className={styles.skipButton}>
        로그인 없이 공지 확인하기
      </button>
    </div>
  );
};

export default Login;
