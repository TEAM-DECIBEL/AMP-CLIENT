import type { TabValue } from '@widgets/home/constants/home-tabs';

import type {
  AllFestivalItem,
  UpcomingFestivalItem,
} from '@shared/types/home-response';

import HomeFestivalList from '../home-festival-list/home-festival-list';
import HomeFestivalTabs from '../home-festival-tabs/home-festival-tabs';

import * as styles from './home-festival-section.css';

interface HomeFestivalSectionProps {
  selectedTab: TabValue;
  onTabChange: (value: TabValue) => void;
  allFestivals: AllFestivalItem[];
  upcomingFestivals: UpcomingFestivalItem[];
  onToggleAllFestival: (festivalId: number, nextSelected: boolean) => void;
  onToggleUpcomingFestival: (festivalId: number, nextSelected: boolean) => void;
}

const HomeFestivalSection = ({
  selectedTab,
  onTabChange,
  allFestivals,
  upcomingFestivals,
  onToggleAllFestival,
  onToggleUpcomingFestival,
}: HomeFestivalSectionProps) => {
  return (
    <div className={styles.section}>
      <HomeFestivalTabs selectedTab={selectedTab} onTabChange={onTabChange} />
      <HomeFestivalList
        selectedTab={selectedTab}
        allFestivals={allFestivals}
        upcomingFestivals={upcomingFestivals}
        onToggleAllFestival={onToggleAllFestival}
        onToggleUpcomingFestival={onToggleUpcomingFestival}
      />
    </div>
  );
};

export default HomeFestivalSection;
