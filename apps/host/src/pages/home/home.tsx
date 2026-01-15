import { CtaButton } from '@amp/ads-ui';

import FestivalStatus from '@widgets/home/festival-status/festival-status';

import { homeData } from '@shared/mocks/home-data';
import CardHomebannerOrg from '@shared/ui/card/card-homebanner-organizer/card-homebanner-org';

import * as styles from './home.css';

const HomePage = () => {
  const { summary, ongoingFestivals, upcomingFestivals } = homeData;

  // 예시 닉네임
  const nickname = 'SOPT';

  return (
    <section className={styles.page}>
      <CardHomebannerOrg nickname={nickname} />
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
