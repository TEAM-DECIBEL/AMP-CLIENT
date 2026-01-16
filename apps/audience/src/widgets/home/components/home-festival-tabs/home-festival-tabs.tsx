import { Tabs } from '@amp/ads-ui';

import { TAB_ALL, TAB_UPCOMING, type TabValue } from '@widgets/home/constants/home-tabs';

import { tabsSticky } from './home-festival-tabs.css';
interface HomeFestivalTabsProps {
  selectedTab: TabValue;
  onTabChange: (value: TabValue) => void;
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
          onTabChange(value === TAB_UPCOMING ? TAB_UPCOMING : TAB_ALL)
        }
      >
        <Tabs.List>
          <Tabs.Trigger value={TAB_ALL}>전체 공연</Tabs.Trigger>
          <Tabs.Trigger value={TAB_UPCOMING}>관람 예정 공연</Tabs.Trigger>
        </Tabs.List>
      </Tabs>
    </div>
  );
};

export default HomeFestivalTabs;
