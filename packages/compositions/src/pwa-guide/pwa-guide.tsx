import { IMAGES } from '../assets/index';

import * as styles from './pwa-guide.css';

const PwaGuide = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        홈 화면에
        <br />
        앱을 추가해보세요!
      </h3>
      <div className={styles.imageContainer}>
        <img src={IMAGES.PWA_STEP1} alt='pwa 더보기 버튼 클릭 안내 사진' />
        <img src={IMAGES.PWA_STEP2} alt='pwa 공유 버튼 클릭 안내 사진' />
        <img src={IMAGES.PWA_STEP3} alt='pwa 홈화면 추가 버튼 클릭 안내 사진' />
        <img src={IMAGES.PWA_STEP4} alt='pwa 추가 후 실행 안내 사진' />
      </div>
    </div>
  );
};

export default PwaGuide;
