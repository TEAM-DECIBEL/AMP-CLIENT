import { Tabs } from '@amp/ads-ui';

import { tabsSticky } from '../home-festival-section/home-festival-section.css';
interface HomeFestivalTabsProps {
  selectedTab: 'all' | 'upcoming';
  onTabChange: (value: 'all' | 'upcoming') => void;
}

const HomeFestivalTabs = ({
  selectedTab,
  onTabChange,
}: HomeFestivalTabsProps) => {
  return (
    <div className={tabsSticky}>
      <Tabs
        defaultValue={selectedTab}
        variant='viewer'
        onValueChange={(value) =>
          onTabChange(value === 'upcoming' ? 'upcoming' : 'all')
        }
      >
        <Tabs.List>
          <Tabs.Trigger value='all'>전체 공연</Tabs.Trigger>
          <Tabs.Trigger value='upcoming'>관람 예정 공연</Tabs.Trigger>
        </Tabs.List>
      </Tabs>
    </div>
  );
};

export default HomeFestivalTabs;
