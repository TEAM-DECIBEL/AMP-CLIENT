import { useNavigate } from 'react-router';

import { CtaButton } from '@amp/ads-ui';
import { ResultView } from '@amp/compositions';

import { IMAGES } from '@shared/assets/images';
import { ROUTE_PATH } from '@shared/constants/path';

import * as styles from './auth-required.css';

const AuthRequired = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate(ROUTE_PATH.LOGIN);
  };

  return (
    <div className={styles.container}>
      <ResultView
        title='로그인이 필요한 기능이에요!'
        description='로그인하고 기능을 계속 이용해보세요.'
        image={<img src={IMAGES.LOGIN} alt='' />}
      />
      <div className={styles.ctaButtonContainer}>
        <CtaButton type='common' color='gray' onClick={handleLoginClick}>
          로그인 하러가기
        </CtaButton>
      </div>
    </div>
  );
};

export default AuthRequired;
