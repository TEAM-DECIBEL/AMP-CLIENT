import type { Festival } from '@shared/types/home-response';
import EmptyCard from '@shared/ui/card/empty-card/empty-card';
import StatusChip from '@shared/ui/chip/status-chip/status-chip';

import FestivalCard from '../festival-card/festival-card';

import * as styles from './festival-section.css';

interface FestivalListProps {
  festivals: Festival[];
  onMoreClick: (festivalId: number) => void;
  onCardClick: (festivalId: number) => void;
}

const FestivalList = ({
  festivals,
  onMoreClick,
  onCardClick,
}: FestivalListProps) => {
  return (
    <div className={styles.list}>
      {festivals.map((festival) => (
        <div key={festival.festivalId} className={styles.item}>
          <FestivalCard
            festival={festival}
            onMoreClick={onMoreClick}
            onCardClick={onCardClick}
          />
        </div>
      ))}
    </div>
  );
};

interface FestivalSectionProps {
  title: string;
  count: number;
  festivals: Festival[];
  emptyText: string;
  onMoreClick: (festivalId: number) => void;
  onCardClick: (festivalId: number) => void;
}

const FestivalSection = ({
  title,
  count,
  festivals,
  emptyText,
  onMoreClick,
  onCardClick,
}: FestivalSectionProps) => {
  const content =
    festivals.length === 0 ? (
      <EmptyCard>{emptyText}</EmptyCard>
    ) : (
      <FestivalList
        festivals={festivals}
        onMoreClick={onMoreClick}
        onCardClick={onCardClick}
      />
    );

  return (
    <div className={styles.section}>
      <StatusChip title={title} count={count} />
      {content}
    </div>
  );
};

export default FestivalSection;
