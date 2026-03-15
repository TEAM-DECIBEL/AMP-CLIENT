import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router';

import { HomeBanner } from '@amp/compositions';

import FestivalSection from '@widgets/home/components/festival-section/festival-section';

import { USER_QUERY_OPTIONS } from '@entities/user/model/query-options';

import { NAV_PATH } from '@shared/constants/path';

import useHomeFestivals from './model/use-home-festivals';

import { page } from './home.css';

const HomePage = () => {
  const navigate = useNavigate();

  const { data } = useQuery({
    ...USER_QUERY_OPTIONS.NICKNAME(),
  });
  const nickname = data?.nickname;

  const {
    allFestivals,
    plannedFestivals,
    bannerFestival,
    selectedTab,
    setSelectedTab,
  } = useHomeFestivals();

  const handleCardClick = (festivalId: number) => {
    navigate(NAV_PATH.noticeList(festivalId));
  };

  return (
    <div className={page}>
      {bannerFestival ? (
        <HomeBanner
          nickname={nickname}
          status='card'
          title={bannerFestival.title}
          location={bannerFestival.location}
          date={bannerFestival.period}
          dDay={bannerFestival.dDay}
        />
      ) : (
        <HomeBanner nickname={nickname} status='none' />
      )}

      <FestivalSection
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        allFestivals={allFestivals}
        plannedFestivals={plannedFestivals}
        onCardClick={handleCardClick}
      />
    </div>
  );
};

export default HomePage;
