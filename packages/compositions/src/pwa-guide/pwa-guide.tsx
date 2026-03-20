import { IMAGES } from '../assets/index';
import Step from './step/step';

import * as styles from './pwa-guide.css';

const GUIDE_STEPS = [
  {
    step: 1,
    description: '브라우저 하단 더보기 버튼 클릭',
    imgSrc: IMAGES.PWA_STEP1,
  },
  {
    step: 2,
    description: '공유 버튼 클릭',
    imgSrc: IMAGES.PWA_STEP2,
  },
  {
    step: 3,
    description: '홈 화면에 추가 버튼 클릭',
    imgSrc: IMAGES.PWA_STEP3,
  },
  {
    step: 4,
    description: '추가 버튼 클릭 후, 앱 실행!',
    imgSrc: IMAGES.PWA_STEP4,
  },
] as const;

const PwaGuide = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        홈 화면에
        <br />
        앱을 추가해보세요!
      </h3>

      <ul className={styles.imageContainer}>
        {GUIDE_STEPS.map(({ step, description, imgSrc }) => (
          <Step
            key={step}
            step={step}
            description={description}
            imgSrc={imgSrc}
          />
        ))}
      </ul>
    </div>
  );
};

export default PwaGuide;
