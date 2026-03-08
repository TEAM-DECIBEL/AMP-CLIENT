import { useNavigate } from 'react-router';

import { EmptyView } from '@amp/ads-ui';

import {
  TAB_ALL,
  TAB_UPCOMING,
  type TabValue,
} from '@widgets/home/constants/home-tabs';

import { ROUTE } from '@shared/constants/path';
import type { Festival } from '@shared/types/festival';

import FestivalCard from '../festival-card/festival-card';
import HomeFestivalTabs from '../home-festival-tabs/home-festival-tabs';

import * as styles from './festival-section.css';

interface FestivalSectionProps {
  selectedTab: TabValue;
  onTabChange: (value: TabValue) => void;
  allFestivals: Festival[];
  plannedFestivals: Festival[];
}

const FestivalSection = ({
  selectedTab,
  onTabChange,
  allFestivals,
  plannedFestivals,
}: FestivalSectionProps) => {
  const navigate = useNavigate();

  const handleCardClick = (festivalId: number) => {
    navigate(ROUTE.noticeList(festivalId));
  };

  const targetFestivals =
    selectedTab === TAB_ALL ? allFestivals : plannedFestivals;

  const emptyConfig = {
    [TAB_ALL]: {
      isEmpty: allFestivals.length === 0,
      text: '등록한 공연이 아직 없어요.',
    },
    [TAB_UPCOMING]: {
      isEmpty: plannedFestivals.length === 0,
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
