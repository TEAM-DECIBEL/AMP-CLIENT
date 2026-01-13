import { CtaButton } from '@amp/ads-ui';

import * as styles from './home.css';

const HomePage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.content}></div>
      <div className={styles.ctaArea}>
        <CtaButton type='primary' onClick={() => {}}>
          공연 추가하기
        </CtaButton>
      </div>
    </div>
  );
};

export default HomePage;
