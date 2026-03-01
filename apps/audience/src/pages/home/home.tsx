import { useQuery } from '@tanstack/react-query';

import { HomeBanner } from '@amp/compositions';

import HomeFestivalSection from '@widgets/home/components/home-festival-section/home-festival-section';

import { HOME_QUERY_OPTIONS } from '@features/home/apis/query';

import useHomeFestivals from './model/use-home-festivals';

import { page } from './home.css';

const HomePage = () => {
  const { data } = useQuery({
    ...HOME_QUERY_OPTIONS.NICKNAME(),
  });
  const nickname = data?.nickname;

  const {
    allFestivals,
    upcomingFestivals,
    bannerFestival,
    selectedTab,
    setSelectedTab,
    handleToggleAllFestival,
    handleToggleUpcomingFestival,
  } = useHomeFestivals();

  return (
    <div className={page}>
      {bannerFestival ? (
        <HomeBanner
          nickname={nickname}
          status='card'
          title={bannerFestival.title}
          location={bannerFestival.location}
          date={bannerFestival.period}
          dday={bannerFestival.dDay}
        />
      ) : (
        <HomeBanner nickname={nickname} status='none' />
      )}

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
