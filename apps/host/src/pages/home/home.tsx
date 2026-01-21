import { useNavigate } from 'react-router';

import { CtaButton } from '@amp/ads-ui';
import { ButtonGradientSection } from '@amp/compositions';

import FestivalOverview from '@widgets/home/festival-overview/festival-overview';

import { ROUTE_PATH } from '@shared/constants/path';
import { homeData } from '@shared/mocks/home-data';
import CardHomebannerOrg from '@shared/ui/card/card-homebanner-organizer/card-homebanner-org';
import Tooltip from '@shared/ui/tooltip/tooltip';

import * as styles from './home.css';

const HomePage = () => {
  const { summary, ongoingFestivals, upcomingFestivals } = homeData;

  // 예시 닉네임
  const nickname = 'SOPT';
  const showTooltip = summary.ongoingCount === 0 && summary.upcomingCount === 0;
  const navigate = useNavigate();
  const handleCreateClick = () => {
    navigate(ROUTE_PATH.EVENT_CREATE);
  };

  return (
    <section className={styles.page}>
      <CardHomebannerOrg nickname={nickname} />
      <div className={styles.content}>
        <FestivalOverview
          ongoingCount={summary.ongoingCount}
          upcomingCount={summary.upcomingCount}
          ongoingFestivals={ongoingFestivals}
          upcomingFestivals={upcomingFestivals}
        />
      </div>
      <ButtonGradientSection className={styles.ctaArea}>
        {showTooltip && <Tooltip />}
        <CtaButton type='common' onClick={handleCreateClick}>
          공연 등록하기
        </CtaButton>
      </ButtonGradientSection>
    </section>
  );
};

export default HomePage;
