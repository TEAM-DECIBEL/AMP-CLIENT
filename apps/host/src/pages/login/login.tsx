import { CtaButton } from '@amp/ads-ui';
import { GoogleIcon } from '@amp/ads-ui/icons';
import { ResultView } from '@amp/compositions';

import * as styles from './login.css';

const Login = () => {
  const handleLoginClick = () => {
    //TODO: API 연결
  };

  return (
    <div className={styles.container}>
      <ResultView
        title={`흩어져 있던 공연 공지를\n관객에게 가장 가까이`}
        image={<img src='/image.png' alt='로그인 안내 이미지' />}
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
