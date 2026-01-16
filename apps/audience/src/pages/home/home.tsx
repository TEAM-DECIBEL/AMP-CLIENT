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
  const upcomingFestival = homeData.data;
  const [selectedTab, setSelectedTab] = useState<'all' | 'upcoming'>('all');

  const banner = upcomingFestival ? (
    <HomeBanner
      nickname='관객 이름'
      status='card'
      title={upcomingFestival.title}
      location={upcomingFestival.location}
      date={upcomingFestival.period}
      dday={upcomingFestival.dDay}
    />
  ) : (
    <HomeBanner nickname='관객 이름' status='none' />
  );

  return (
    <div>
      {banner}
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
      <div className={styles.content}>
        <div className={styles.cardList}>
          {selectedTab === 'all'
            ? allFestivalData.data.festivals.map((festival) => (
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
                      onChange={() => {}}
                    />
                  </CardFestival.Button>
                </CardFestival>
              ))
            : upcomingFestivalData.data.festivals.map((festival) => (
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
                      onChange={() => {}}
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
