import { useQuery } from '@tanstack/react-query';

import { HomeBanner } from '@amp/compositions';

import HomeFestivalSection from '@widgets/home/components/home-festival-section/home-festival-section';

import { MY_PAGE_QUERY_OPTIONS } from '@features/mypage/apis/query';

import useHomeFestivals from './model/use-home-festivals';

import { page } from './home.css';

const HomePage = () => {
  const isAuthed = Boolean(localStorage.getItem('accessToken'));
  const { data: myPageData } = useQuery({
    ...MY_PAGE_QUERY_OPTIONS.MY_PAGE(),
    enabled: isAuthed,
  });
  const nickname = myPageData?.nickname ?? '';

  const {
    allFestivals,
    upcomingFestivals,
    bannerFestival,
    selectedTab,
    setSelectedTab,
    handleToggleAllFestival,
    handleToggleUpcomingFestival,
  } = useHomeFestivals(isAuthed);

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
