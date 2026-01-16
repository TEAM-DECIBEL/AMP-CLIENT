import FestivalActions from '@features/home/festival-actions/festival-actions';

import type { Festival } from '@shared/types/home-response';

import FestivalSection from '../festival-section/festival-section';

import * as styles from './festival-overview.css';

interface FestivalOverviewProps {
  ongoingCount: number;
  upcomingCount: number;
  ongoingFestivals: Festival[];
  upcomingFestivals: Festival[];
}

const FestivalOverview = ({
  ongoingCount,
  upcomingCount,
  ongoingFestivals,
  upcomingFestivals,
}: FestivalOverviewProps) => {
  const sections = [
    {
      title: '진행 중인 공연',
      count: ongoingCount,
      festivals: ongoingFestivals,
      emptyText: '진행 중인 공연이 없어요!',
    },
    {
      title: '진행 예정 공연',
      count: upcomingCount,
      festivals: upcomingFestivals,
      emptyText: '진행 예정인 공연이 없어요!',
    },
  ] as const;

  return (
    <FestivalActions>
      {(handleOpenOptionSheet) => (
        <div className={styles.container}>
          {sections.map((section) => (
            <FestivalSection
              key={section.title}
              {...section}
              onMoreClick={handleOpenOptionSheet}
            />
          ))}
        </div>
      )}
    </FestivalActions>
  );
};

export default FestivalOverview;
