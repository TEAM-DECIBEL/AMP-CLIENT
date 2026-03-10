import { useNavigate } from 'react-router';

import { EmptyView } from '@amp/ads-ui';

import {
  TAB_ALL,
  TAB_UPCOMING,
  type TabValue,
} from '@widgets/home/constants/home-tabs';

import { ROUTE_PATH } from '@shared/constants/path';
import type {
  AllFestivalItem,
  UpcomingFestivalItem,
} from '@shared/types/home-response';

import FestivalCard from '../festival-card/festival-card';
import HomeFestivalTabs from '../home-festival-tabs/home-festival-tabs';

import * as styles from './festival-section.css';

interface FestivalSectionProps {
  selectedTab: TabValue;
  onTabChange: (value: TabValue) => void;
  allFestivals: AllFestivalItem[];
  upcomingFestivals: UpcomingFestivalItem[];
}

const FestivalSection = ({
  selectedTab,
  onTabChange,
  allFestivals,
  upcomingFestivals,
}: FestivalSectionProps) => {
  const navigate = useNavigate();

  const handleMoveToFestival = (festivalId: number) => () => {
    navigate(ROUTE_PATH.NOTICE_LIST.replace(':eventId', String(festivalId)));
  };

  const targetFestivals =
    selectedTab === TAB_ALL ? allFestivals : upcomingFestivals;

  const emptyConfig = {
    [TAB_ALL]: {
      isEmpty: allFestivals.length === 0,
      text: '등록된 공연이 아직 없어요.',
    },
    [TAB_UPCOMING]: {
      isEmpty: upcomingFestivals.length === 0,
      text: '관람 예정인 공연이 없어요.',
    },
  } as const;

  return (
    <section className={styles.section}>
      <HomeFestivalTabs selectedTab={selectedTab} onTabChange={onTabChange} />

      <div className={styles.content}>
        {emptyConfig[selectedTab].isEmpty ? (
          <div className={styles.emptyContainer}>
            <EmptyView title={emptyConfig[selectedTab].text} />
          </div>
        ) : (
          <ul className={styles.cardList}>
            {targetFestivals.map((festival) => (
              <li key={festival.festivalId}>
                <FestivalCard
                  festival={festival}
                  onClick={handleMoveToFestival(festival.festivalId)}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default FestivalSection;
