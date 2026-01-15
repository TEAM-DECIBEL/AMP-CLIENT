import { CtaButton } from '@amp/ads-ui';

import FestivalStatus from '@widgets/home/festival-status/festival-status';

import { homeData } from '@shared/mocks/home';

import * as styles from './home.css';

const HomePage = () => {
  const { summary, ongoingFestivals, upcomingFestivals } = homeData;

  return (
    <section className={styles.page}>
      {/* 홈 배너 추가 */}
      <div className={styles.content}>
        <FestivalStatus
          ongoingCount={summary.ongoingCount}
          upcomingCount={summary.upcomingCount}
          ongoingFestivals={ongoingFestivals}
          upcomingFestivals={upcomingFestivals}
        />
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
