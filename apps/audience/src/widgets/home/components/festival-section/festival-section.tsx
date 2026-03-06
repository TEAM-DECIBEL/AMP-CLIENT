import { generatePath, useNavigate } from 'react-router';

import { EmptyView } from '@amp/ads-ui';

import {
  TAB_ALL,
  TAB_UPCOMING,
  type TabValue,
} from '@widgets/home/constants/home-tabs';

import { ROUTE_PATH } from '@shared/constants/path';
import type { Festival } from '@shared/types/festival';

import FestivalCard from '../festival-card/festival-card';
import HomeFestivalTabs from '../home-festival-tabs/home-festival-tabs';

import * as styles from './festival-section.css';

interface FestivalSectionProps {
  selectedTab: TabValue;
  onTabChange: (value: TabValue) => void;
  allFestivals: Festival[];
  upcomingFestivals: Festival[];
}

const FestivalSection = ({
  selectedTab,
  onTabChange,
  allFestivals,
  upcomingFestivals,
}: FestivalSectionProps) => {
  const navigate = useNavigate();

  const handleCardClick = (festivalId: number) => {
    navigate(
      generatePath(ROUTE_PATH.NOTICE_LIST, {
        eventId: String(festivalId),
      }),
    );
  };

  const targetFestivals =
    selectedTab === TAB_ALL ? allFestivals : upcomingFestivals;

  const emptyConfig = {
    [TAB_ALL]: {
      isEmpty: allFestivals.length === 0,
      text: '등록한 공연이 아직 없어요.',
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
                  showStatus={false}
                  onCardClick={handleCardClick}
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
