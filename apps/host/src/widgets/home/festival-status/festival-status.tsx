import type { Festival } from '@shared/types/home-response';
import EmptyCard from '@shared/ui/card/empty-card/empty-card';
import HomeChip from '@shared/ui/chip/home-chip/home-chip';

import * as styles from './festival-status.css';

interface FestivalStatusProps {
  ongoingCount: number;
  upcomingCount: number;
  ongoingFestivals: Festival[];
  upcomingFestivals: Festival[];
}

const FestivalStatus = ({
  ongoingCount,
  upcomingCount,
  ongoingFestivals,
  upcomingFestivals,
}: FestivalStatusProps) => {
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
    <div className={styles.container}>
      {sections.map(({ title, count, festivals, emptyText }) => (
        <div key={title} className={styles.section}>
          <HomeChip title={title} count={count} />
          {festivals.length === 0 ? (
            <EmptyCard>{emptyText}</EmptyCard>
          ) : (
            <>{/* CardFestival */}</>
          )}
        </div>
      ))}
    </div>
  );
};

export default FestivalStatus;
