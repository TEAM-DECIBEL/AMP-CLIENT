import { CtaButton } from '@amp/ads-ui';

import FestivalStatusWidget, {
  type Festival,
} from '@widgets/home/components/festival-status/festival-status';

import * as styles from './home.css';

const HomePage = () => {
  const summary = {
    ongoingCount: 0,
    upcomingCount: 0,
    totalCount: 0,
  };
  const ongoingFestivals: Festival[] = [];
  const upcomingFestivals: Festival[] = [];

  return (
    <section className={styles.page}>
      {/* 홈 배너 추가 */}
      <div className={styles.content}>
        <FestivalStatusWidget
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
