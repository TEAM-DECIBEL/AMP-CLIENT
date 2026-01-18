import { useState } from 'react';

import { TAB_ALL, type TabValue } from '@widgets/home/constants/home-tabs';

import {
  allFestivalData,
  upcomingFestivalData,
} from '@shared/mocks/home-festival-data';
import type {
  AllFestivalItem,
  UpcomingFestivalItem,
} from '@shared/types/home-response';

const useHomeFestivals = () => {
  const [selectedTab, setSelectedTab] = useState<TabValue>(TAB_ALL);
  const [allFestivals, setAllFestivals] = useState<AllFestivalItem[]>(
    allFestivalData.data.festivals,
  );
  const [upcomingFestivals, setUpcomingFestivals] = useState<
    UpcomingFestivalItem[]
  >(upcomingFestivalData.data.festivals);

  const removeById = <T extends { festivalId: number }>(
    list: T[],
    festivalId: number,
  ) => list.filter((item) => item.festivalId !== festivalId);

  const toggleWishList = <T extends { festivalId: number; wishList: boolean }>(
    list: T[],
    festivalId: number,
    nextSelected: boolean,
  ) =>
    list.map((item) =>
      item.festivalId === festivalId
        ? { ...item, wishList: nextSelected }
        : item,
    );

  const createUpcomingFromAll = (festivalId: number) => {
    const target = allFestivals.find((item) => item.festivalId === festivalId);
    if (!target) {
      return null;
    }
    return {
      festivalId: target.festivalId,
      title: target.title,
      mainImageUrl: target.mainImageUrl,
      period: target.period,
      status: '관람 예정',
      wishList: true,
      dDay: target.dDay,
    };
  };

  const handleToggleAllFestival = (
    festivalId: number,
    nextSelected: boolean,
  ) => {
    setAllFestivals((prev) => toggleWishList(prev, festivalId, nextSelected));
    setUpcomingFestivals((prev) => {
      if (nextSelected) {
        if (prev.some((item) => item.festivalId === festivalId)) {
          return prev;
        }
        const created = createUpcomingFromAll(festivalId);
        return created ? [...prev, created] : prev;
      }
      return removeById(prev, festivalId);
    });
  };

  const handleToggleUpcomingFestival = (
    festivalId: number,
    nextSelected: boolean,
  ) => {
    setUpcomingFestivals((prev) =>
      nextSelected
        ? toggleWishList(prev, festivalId, nextSelected)
        : removeById(prev, festivalId),
    );
    setAllFestivals((prev) => toggleWishList(prev, festivalId, nextSelected));
  };

  return {
    allFestivals,
    upcomingFestivals,
    selectedTab,
    setSelectedTab,
    handleToggleAllFestival,
    handleToggleUpcomingFestival,
  };
};

export default useHomeFestivals;
