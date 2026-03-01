import { useQuery } from '@tanstack/react-query';

import { HomeBanner } from '@amp/compositions';

import FestivalSection from '@widgets/home/components/festival-section/festival-section';

import { MY_PAGE_QUERY_OPTIONS } from '@features/mypage/apis/query';

import useHomeFestivals from './model/use-home-festivals';

import { page } from './home.css';

const HomePage = () => {
  const { data: myPageData } = useQuery({
    ...MY_PAGE_QUERY_OPTIONS.MY_PAGE(),
  });
  const nickname = myPageData?.nickname ?? '';

  const {
    allFestivals,
    upcomingFestivals,
    bannerFestival,
    selectedTab,
    setSelectedTab,
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

      <FestivalSection
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        allFestivals={allFestivals}
        upcomingFestivals={upcomingFestivals}
      />
    </div>
  );
};

export default HomePage;
