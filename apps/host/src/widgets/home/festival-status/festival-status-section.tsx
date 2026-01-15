import type { Festival } from '@shared/types/home-response';
import EmptyCard from '@shared/ui/card/empty-card/empty-card';
import HomeChip from '@shared/ui/chip/home-chip/home-chip';

import FestivalStatusCard from './festival-status-card';

import * as styles from './festival-status.css';

interface FestivalStatusListProps {
  festivals: Festival[];
  onMoreClick: () => void;
}

const FestivalStatusList = ({
  festivals,
  onMoreClick,
}: FestivalStatusListProps) => {
  return (
    <div className={styles.list}>
      {festivals.map((festival) => (
        <div key={festival.festivalId} className={styles.item}>
          <FestivalStatusCard festival={festival} onMoreClick={onMoreClick} />
        </div>
      ))}
    </div>
  );
};

interface FestivalStatusSectionProps {
  title: string;
  count: number;
  festivals: Festival[];
  emptyText: string;
  onMoreClick: () => void;
}

const FestivalStatusSection = ({
  title,
  count,
  festivals,
  emptyText,
  onMoreClick,
}: FestivalStatusSectionProps) => {
  const content =
    festivals.length === 0 ? (
      <EmptyCard>{emptyText}</EmptyCard>
    ) : (
      <FestivalStatusList festivals={festivals} onMoreClick={onMoreClick} />
    );

  return (
    <div className={styles.section}>
      <HomeChip title={title} count={count} />
      {content}
    </div>
  );
};

export default FestivalStatusSection;
