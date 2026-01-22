import { useQuery } from '@tanstack/react-query';
import { generatePath, useNavigate } from 'react-router';

import { CtaButton } from '@amp/ads-ui';
import { ButtonGradientSection } from '@amp/compositions';

import FestivalOverview from '@widgets/home/festival-overview/festival-overview';

import { HOME_QUERY_OPTIONS } from '@features/home/apis/query';
import { MY_PAGE_QUERY_OPTIONS } from '@features/mypage/apis/query';

import { ROUTE_PATH } from '@shared/constants/path';
import CardHomebannerOrg from '@shared/ui/card/card-homebanner-organizer/card-homebanner-org';
import Tooltip from '@shared/ui/tooltip/tooltip';

import * as styles from './home.css';

const HomePage = () => {
  const navigate = useNavigate();

  const { data: homeData } = useQuery(HOME_QUERY_OPTIONS.FESTIVALS());
  const { data: myPageData } = useQuery(MY_PAGE_QUERY_OPTIONS.MY_PAGE());

  if (!homeData) {
    return null;
  }

  const { summary, ongoingFestivals, upcomingFestivals } = homeData;

  const nickname = myPageData?.organizerName ?? '';
  const showTooltip = summary.ongoingCount === 0 && summary.upcomingCount === 0;

  const handleCreateClick = () => {
    navigate(ROUTE_PATH.EVENT_CREATE);
  };
  const handleCardClick = (festivalId: number) => {
    navigate(
      generatePath(ROUTE_PATH.NOTICE_LIST, {
        eventId: String(festivalId),
      }),
    );
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
          onCardClick={handleCardClick}
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
