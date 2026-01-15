import type { Festival } from '@shared/types/home-response';
import EmptyCard from '@shared/ui/card/empty-card/empty-card';
import HomeChip from '@shared/ui/chip/home-chip/home-chip';

import FestivalStatusCard from './festival-status-card';

import * as styles from './festival-status.css';

interface FestivalStatusListProps {
  festivals: Festival[];
}

const FestivalStatusList = ({ festivals }: FestivalStatusListProps) => {
  return (
    <div className={styles.list}>
      {festivals.map((festival) => (
        <div key={festival.festivalId} className={styles.item}>
          <FestivalStatusCard festival={festival} />
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
}

const FestivalStatusSection = ({
  title,
  count,
  festivals,
  emptyText,
}: FestivalStatusSectionProps) => {
  const content =
    festivals.length === 0 ? (
      <EmptyCard>{emptyText}</EmptyCard>
    ) : (
      <FestivalStatusList festivals={festivals} />
    );

  return (
    <div className={styles.section}>
      <HomeChip title={title} count={count} />
      {content}
    </div>
  );
};

export default FestivalStatusSection;
