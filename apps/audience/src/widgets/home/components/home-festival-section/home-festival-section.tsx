import type {
  AllFestivalItem,
  UpcomingFestivalItem,
} from '@shared/types/home-response';
import type { TabValue } from '@widgets/home/constants/home-tabs';

import HomeFestivalList from '../home-festival-list/home-festival-list';
import HomeFestivalTabs from '../home-festival-tabs/home-festival-tabs';

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
    <>
      <HomeFestivalTabs selectedTab={selectedTab} onTabChange={onTabChange} />
      <HomeFestivalList
        selectedTab={selectedTab}
        allFestivals={allFestivals}
        upcomingFestivals={upcomingFestivals}
        onToggleAllFestival={onToggleAllFestival}
        onToggleUpcomingFestival={onToggleUpcomingFestival}
      />
    </>
  );
};

export default HomeFestivalSection;
