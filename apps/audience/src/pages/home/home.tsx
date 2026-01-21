import { HomeBanner } from '@amp/compositions';

import HomeFestivalSection from '@widgets/home/components/home-festival-section/home-festival-section';

import useHomeFestivals from './model/use-home-festivals';

import { page } from './home.css';

const HomePage = () => {
  const nickname = '관객 이름';
  const {
    allFestivals,
    upcomingFestivals,
    selectedTab,
    setSelectedTab,
    handleToggleAllFestival,
    handleToggleUpcomingFestival,
  } = useHomeFestivals();

  const bannerFestival = upcomingFestivals[0];
  const banner = bannerFestival ? (
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
  );

  return (
    <div className={page}>
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
