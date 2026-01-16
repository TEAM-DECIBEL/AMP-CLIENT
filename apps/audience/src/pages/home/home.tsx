import { useState } from 'react';

import { CardFestival, Chip, FlagButton, Tabs } from '@amp/ads-ui';

import HomeBanner from '@widgets/banner/home-banner/home-banner';

import { homeData } from '@shared/mocks/home-data';
import {
  allFestivalData,
  upcomingFestivalData,
} from '@shared/mocks/home-festival-data';

import * as styles from './home.css';

const HomePage = () => {
  const nickname = '관객 이름';
  const upcomingFestival = homeData.data;
  const [selectedTab, setSelectedTab] = useState<'all' | 'upcoming'>('all');
  const [allFestivals, setAllFestivals] = useState(
    allFestivalData.data.festivals,
  );
  const [upcomingFestivals, setUpcomingFestivals] = useState(
    upcomingFestivalData.data.festivals,
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
        return prev.filter((item) => item.festivalId !== festivalId);
      }

      return prev;
    });

    setAllFestivals((prev) =>
      prev.map((item) =>
        item.festivalId === festivalId
          ? { ...item, wishList: nextSelected }
          : item,
      ),
    );
  };

  const handleToggleUpcomingFestival = (
    festivalId: number,
    nextSelected: boolean,
  ) => {
    if (!nextSelected) {
      setUpcomingFestivals((prev) =>
        prev.filter((item) => item.festivalId !== festivalId),
      );
      return;
    }

    setUpcomingFestivals((prev) =>
      prev.map((item) =>
        item.festivalId === festivalId
          ? { ...item, wishList: nextSelected }
          : item,
      ),
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
      <div className={styles.tabsSticky}>
        <Tabs
          defaultValue='all'
          variant='viewer'
          onValueChange={(value) =>
            setSelectedTab(value === 'upcoming' ? 'upcoming' : 'all')
          }
        >
          <Tabs.List>
            <Tabs.Trigger value='all'>전체 공연</Tabs.Trigger>
            <Tabs.Trigger value='upcoming'>관람 예정 공연</Tabs.Trigger>
          </Tabs.List>
        </Tabs>
      </div>
      <div className={styles.content}>
        <div className={styles.cardList}>
          {selectedTab === 'all'
            ? allFestivals.map((festival) => (
                <CardFestival key={festival.festivalId}>
                  <CardFestival.Image
                    src={festival.mainImageUrl}
                    alt={festival.title}
                  />
                  <CardFestival.Body
                    title={festival.title}
                    date={festival.period}
                  >
                    <CardFestival.Chip>
                      <Chip variant='status' status='dday'>
                        {festival.dDay === 0
                          ? 'D-Day'
                          : `D-${Math.abs(festival.dDay)}`}
                      </Chip>
                      {festival.wishList && (
                        <Chip variant='status' status='current'>
                          관람 예정
                        </Chip>
                      )}
                    </CardFestival.Chip>
                  </CardFestival.Body>
                  <CardFestival.Button>
                    <FlagButton
                      selected={festival.wishList}
                      onChange={(nextSelected) =>
                        handleToggleAllFestival(
                          festival.festivalId,
                          nextSelected,
                        )
                      }
                    />
                  </CardFestival.Button>
                </CardFestival>
              ))
            : upcomingFestivals.map((festival) => (
                <CardFestival key={festival.festivalId}>
                  <CardFestival.Image
                    src={festival.mainImageUrl}
                    alt={festival.title}
                  />
                  <CardFestival.Body
                    title={festival.title}
                    date={festival.period}
                  >
                    <CardFestival.Chip>
                      <Chip variant='status' status='dday'>
                        {festival.dDay === 0
                          ? 'D-Day'
                          : `D-${Math.abs(festival.dDay)}`}
                      </Chip>
                      <Chip variant='status' status='current'>
                        {festival.status}
                      </Chip>
                    </CardFestival.Chip>
                  </CardFestival.Body>
                  <CardFestival.Button>
                    <FlagButton
                      selected={festival.wishList}
                      onChange={(nextSelected) =>
                        handleToggleUpcomingFestival(
                          festival.festivalId,
                          nextSelected,
                        )
                      }
                    />
                  </CardFestival.Button>
                </CardFestival>
              ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
