import { generatePath, useNavigate } from 'react-router';

import FestivalActions from '@features/home/festival-actions/festival-actions';

import { ROUTE_PATH } from '@shared/constants/path';
import type { Festival } from '@shared/types/home-response';
import EmptyCard from '@shared/ui/card/empty-card/empty-card';
import StatusChip from '@shared/ui/chip/status-chip/status-chip';

import FestivalCard from '../festival-card/festival-card';

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
  const navigate = useNavigate();

  const handleCardClick = (festivalId: number) => {
    navigate(
      generatePath(ROUTE_PATH.NOTICE_LIST, { eventId: String(festivalId) }),
    );
  };

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
  ];

  return (
    <FestivalActions
      onEdit={() =>
        // TODO : 공연 수정 뷰로 변경
        navigate(`/`)
      }
    >
      {(handleOpenOptionSheet) => (
        <div className={styles.container}>
          {sections.map(({ title, count, festivals, emptyText }) => (
            <section key={title} className={styles.sectionContainer}>
              <StatusChip title={title} count={count} />

              {festivals.length === 0 ? (
                <EmptyCard>{emptyText}</EmptyCard>
              ) : (
                <ul className={styles.listContainer}>
                  {festivals.map((festival) => (
                    <li key={festival.festivalId}>
                      <FestivalCard
                        festival={festival}
                        onMoreClick={handleOpenOptionSheet}
                        onCardClick={handleCardClick}
                      />
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      )}
    </FestivalActions>
  );
};

export default FestivalOverview;
