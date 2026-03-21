import { useNavigate } from 'react-router';

import { CtaButton } from '@amp/ads-ui';
import { ResultView } from '@amp/compositions';

import { IMAGES } from '@shared/assets/images';
import { ROUTE_PATH } from '@shared/constants/path';

import * as styles from './login-error.css';

const LoginError = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    if (window.history.length > 1) {
      navigate(-1);
      return;
    }
    navigate(ROUTE_PATH.LOGIN, { replace: true });
  };
  return (
    <div className={styles.container}>
      <ResultView
        title='올바르지 않은 Google 계정이에요.'
        description='AMP에 사전 안내주신 Google 계정으로 로그인해주세요.'
        image={<img src={IMAGES.LOGIN_ERROR} alt='' />}
      />
      <div className={styles.ctaButtonContainer}>
        <CtaButton type='common' color='gray' onClick={handleBackClick}>
          돌아가기
        </CtaButton>
      </div>
    </div>
  );
};

export default LoginError;
