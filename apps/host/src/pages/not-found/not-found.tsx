import { useNavigate } from 'react-router';

import { CtaButton } from '@amp/ads-ui';
import { ResultView } from '@amp/compositions';

import { IMAGES } from '@shared/assets/images';
import { ROUTE_PATH } from '@shared/constants/path';

import * as styles from './not-found.css';

const NotFound = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate(ROUTE_PATH.HOME);
  };

  return (
    <div className={styles.container}>
      <ResultView
        title='페이지 오류가 발생했어요.'
        description='홈으로 이동해 다시 시도해 주세요.'
        image={<img src={IMAGES.NOT_FOUND} alt='' />}
      />
      <div className={styles.ctaButtonContainer}>
        <CtaButton type='common' color='gray' onClick={handleHomeClick}>
          홈으로 이동하기
        </CtaButton>
      </div>
    </div>
  );
};

export default NotFound;
