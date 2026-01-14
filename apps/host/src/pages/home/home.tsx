import { CtaButton } from '@amp/ads-ui';

import EmptyCard from '@shared/ui/card/empty-card/empty-card';
import HomeChip from '@shared/ui/chip/home-chip/home-chip';

import * as styles from './home.css';

const HomePage = () => {
  return (
    <section className={styles.page}>
      {/* 홈 배너 추가 */}
      <div className={styles.content}>
        <div className={styles.chipArea}>
          <HomeChip title='진행 중인 공연' count='0' />
          <EmptyCard>진행 중인 공연이 없어요!</EmptyCard>
        </div>
        <div className={styles.chipArea}>
          <HomeChip title='진행 예정 공연' count='2' />
          <EmptyCard>진행 예정인 공연이 없어요!</EmptyCard>
        </div>
      </div>
      <div className={styles.ctaArea}>
        <CtaButton type='primary' onClick={() => {}}>
          공연 등록하기
        </CtaButton>
      </div>
    </section>
  );
};

export default HomePage;
