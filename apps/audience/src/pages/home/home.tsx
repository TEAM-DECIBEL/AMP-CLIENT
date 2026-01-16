import { useState } from 'react';

import HomeBanner from '@widgets/banner/home-banner/home-banner';
import HomeFestivalSection from '@widgets/home/home-festival-section/home-festival-section';

import { homeData } from '@shared/mocks/home-data';
import {
  allFestivalData,
  upcomingFestivalData,
} from '@shared/mocks/home-festival-data';
import type {
  AllFestivalItem,
  UpcomingFestivalItem,
} from '@shared/types/home-response';

const HomePage = () => {
  const nickname = '관객 이름';
  const upcomingFestival = homeData.data;
  const [selectedTab, setSelectedTab] = useState<'all' | 'upcoming'>('all');
  const [allFestivals, setAllFestivals] = useState<AllFestivalItem[]>(
    allFestivalData.data.festivals,
  );
  const [upcomingFestivals, setUpcomingFestivals] = useState<
    UpcomingFestivalItem[]
  >(
    upcomingFestivalData.data.festivals,
  );

  const removeFestivalById = <T extends { festivalId: number }>(
    list: T[],
    festivalId: number,
  ) => list.filter((item) => item.festivalId !== festivalId);

  const updateFestivalById = <T extends { festivalId: number }>(
    list: T[],
    festivalId: number,
    updater: (item: T) => T,
  ) =>
    list.map((item) =>
      item.festivalId === festivalId ? updater(item) : item,
    );

  const handleToggleAllFestival = (
    festivalId: number,
    nextSelected: boolean,
  ) => {
    setUpcomingFestivals((prev) => {
      const exists = prev.some((item) => item.festivalId === festivalId);

      if (nextSelected && !exists) {
        const target = allFestivals.find(
          (item) => item.festivalId === festivalId,
        );
        if (!target) {
          return prev;
        }
        return [
          ...prev,
          {
            festivalId: target.festivalId,
            title: target.title,
            mainImageUrl: target.mainImageUrl,
            period: target.period,
            status: '관람 예정',
            wishList: true,
            dDay: target.dDay,
          },
        ];
      }

      if (!nextSelected && exists) {
        return removeFestivalById(prev, festivalId);
      }

      return prev;
    });

    setAllFestivals((prev) =>
      updateFestivalById(prev, festivalId, (item) => ({
        ...item,
        wishList: nextSelected,
      })),
    );
  };

  const handleToggleUpcomingFestival = (
    festivalId: number,
    nextSelected: boolean,
  ) => {
    if (!nextSelected) {
      setUpcomingFestivals((prev) => removeFestivalById(prev, festivalId));
      return;
    }

    setUpcomingFestivals((prev) =>
      updateFestivalById(prev, festivalId, (item) => ({
        ...item,
        wishList: nextSelected,
      })),
    );
  };

  const banner = upcomingFestival ? (
    <HomeBanner
      nickname={nickname}
      status='card'
      title={upcomingFestival.title}
      location={upcomingFestival.location}
      date={upcomingFestival.period}
      dday={upcomingFestival.dDay}
    />
  ) : (
    <HomeBanner nickname={nickname} status='none' />
  );

  return (
    <div>
      {banner}
      <HomeFestivalSection
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        allFestivals={allFestivals}
        upcomingFestivals={upcomingFestivals}
        onToggleAllFestival={handleToggleAllFestival}
        onToggleUpcomingFestival={handleToggleUpcomingFestival}
      />
    </div>
  );
};

export default HomePage;
