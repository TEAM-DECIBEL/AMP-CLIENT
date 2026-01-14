import { CtaButton } from '@amp/ads-ui';

import * as styles from './home.css';

const HomePage = () => {
  return (
    <section className={styles.page}>
      <div className={styles.content}></div>
      <div className={styles.ctaArea}>
        <CtaButton type='primary' onClick={() => {}}>
          공연 등록하기
        </CtaButton>
      </div>
    </section>
  );
};

export default HomePage;
