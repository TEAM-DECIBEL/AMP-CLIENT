import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import {
  TAB_ALL,
  TAB_UPCOMING,
  type TabValue,
} from '@widgets/home/constants/home-tabs';

import { FESTIVAL_QUERY_OPTIONS } from '@entities/festival/model/query-options';

const useHomeFestivals = () => {
  const [selectedTab, setSelectedTab] = useState<TabValue>(TAB_ALL);

  const { data: allFestivalsData } = useQuery({
    ...FESTIVAL_QUERY_OPTIONS.ALL_FESTIVALS({ page: 0, size: 20 }),
    enabled: selectedTab === TAB_ALL,
  });

  const { data: plannedFestivalsData } = useQuery({
    ...FESTIVAL_QUERY_OPTIONS.PLANNED_FESTIVALS({ page: 0, size: 20 }),
    enabled: selectedTab === TAB_UPCOMING,
  });

  const { data: upcomingFestivalData } = useQuery({
    ...FESTIVAL_QUERY_OPTIONS.UPCOMING_FESTIVAL(),
  });

  return {
    allFestivals: allFestivalsData?.festivals ?? [],
    upcomingFestivals: plannedFestivalsData?.festivals ?? [],
    bannerFestival: upcomingFestivalData
      ? {
          festivalId: upcomingFestivalData.festivalId,
          title: upcomingFestivalData.title,
          mainImageUrl: upcomingFestivalData.mainImageUrl,
          location: upcomingFestivalData.location,
          period: `${upcomingFestivalData.startDate} ~ ${upcomingFestivalData.endDate}`,
          dDay: upcomingFestivalData.dday,
        }
      : undefined,
    selectedTab,
    setSelectedTab,
  };
};

export default useHomeFestivals;
