import { Tabs } from '@amp/ads-ui';

import HomeBanner from '@widgets/banner/home-banner/home-banner';

import { homeData } from '@shared/mocks/home-data';

const HomePage = () => {
  const upcomingFestival = homeData.data;

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
      <Tabs defaultValue='all' variant='viewer'>
        <Tabs.List>
          <Tabs.Trigger value='all'>전체 공연</Tabs.Trigger>
          <Tabs.Trigger value='upcoming'>관람 예정 공연</Tabs.Trigger>
        </Tabs.List>
      </Tabs>
      관객 홈페이지
    </div>
  );
};

export default HomePage;
