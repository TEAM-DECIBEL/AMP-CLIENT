import { useQuery } from '@tanstack/react-query';

import { HomeBanner } from '@amp/compositions';

import FestivalSection from '@widgets/home/components/festival-section/festival-section';

import { FESTIVAL_QUERY_OPTIONS } from '@entities/festival/model/query-options';

import useHomeFestivals from './model/use-home-festivals';

import { page } from './home.css';

const HomePage = () => {
  const { data } = useQuery({
    ...FESTIVAL_QUERY_OPTIONS.NICKNAME(),
  });
  const nickname = data?.nickname;

  const {
    allFestivals,
    plannedFestivals,
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
        plannedFestivals={plannedFestivals}
      />
    </div>
  );
};

export default HomePage;
