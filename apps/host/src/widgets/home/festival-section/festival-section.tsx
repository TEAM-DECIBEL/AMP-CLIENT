import type { Festival } from '@shared/types/home-response';
import EmptyCard from '@shared/ui/card/empty-card/empty-card';
import HomeChip from '@shared/ui/chip/home-chip/home-chip';

import FestivalCard from '../festival-card/festival-card';

import * as styles from './festival-section.css';

interface FestivalListProps {
  festivals: Festival[];
  onMoreClick: () => void;
}

const FestivalList = ({ festivals, onMoreClick }: FestivalListProps) => {
  return (
    <div className={styles.list}>
      {festivals.map((festival) => (
        <div key={festival.festivalId} className={styles.item}>
          <FestivalCard festival={festival} onMoreClick={onMoreClick} />
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
  onMoreClick: () => void;
}

const FestivalSection = ({
  title,
  count,
  festivals,
  emptyText,
  onMoreClick,
}: FestivalSectionProps) => {
  const content =
    festivals.length === 0 ? (
      <EmptyCard>{emptyText}</EmptyCard>
    ) : (
      <FestivalList festivals={festivals} onMoreClick={onMoreClick} />
    );

  return (
    <div className={styles.section}>
      <HomeChip title={title} count={count} />
      {content}
    </div>
  );
};

export default FestivalSection;
