import { Chip } from '@amp/ads-ui';

import type {
  AllFestivalItem,
  UpcomingFestivalItem,
} from '@shared/types/home-response';

import HomeFestivalCard from '../home-festival-card/home-festival-card';
import HomeFestivalEmpty from '../home-festival-empty/home-festival-empty';

import {
  cardList,
  content,
} from '../home-festival-section/home-festival-section.css';

interface HomeFestivalListProps {
  selectedTab: 'all' | 'upcoming';
  allFestivals: AllFestivalItem[];
  upcomingFestivals: UpcomingFestivalItem[];
  onToggleAllFestival: (festivalId: number, nextSelected: boolean) => void;
  onToggleUpcomingFestival: (festivalId: number, nextSelected: boolean) => void;
}

const HomeFestivalList = ({
  selectedTab,
  allFestivals,
  upcomingFestivals,
  onToggleAllFestival,
  onToggleUpcomingFestival,
}: HomeFestivalListProps) => {
  const emptyConfig = {
    all: {
      isEmpty: allFestivals.length === 0,
      text: '등록한 공연이 아직 없어요.',
    },
    upcoming: {
      isEmpty: upcomingFestivals.length === 0,
      text: '관람 예정인 공연이 없어요.',
    },
  } as const;

  return (
    <div className={content}>
      {emptyConfig[selectedTab].isEmpty ? (
        <HomeFestivalEmpty image={null} text={emptyConfig[selectedTab].text} />
      ) : (
        <div className={cardList}>
          {selectedTab === 'all'
            ? allFestivals.map((festival) => (
                <HomeFestivalCard
                  key={festival.festivalId}
                  title={festival.title}
                  period={festival.period}
                  imageUrl={festival.mainImageUrl}
                  wishList={festival.wishList}
                  onToggle={(nextSelected) =>
                    onToggleAllFestival(festival.festivalId, nextSelected)
                  }
                  chips={
                    <>
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
                    </>
                  }
                />
              ))
            : upcomingFestivals.map((festival) => (
                <HomeFestivalCard
                  key={festival.festivalId}
                  title={festival.title}
                  period={festival.period}
                  imageUrl={festival.mainImageUrl}
                  wishList={festival.wishList}
                  onToggle={(nextSelected) =>
                    onToggleUpcomingFestival(festival.festivalId, nextSelected)
                  }
                  chips={
                    <>
                      <Chip variant='status' status='dday'>
                        {festival.dDay === 0
                          ? 'D-Day'
                          : `D-${Math.abs(festival.dDay)}`}
                      </Chip>
                      <Chip variant='status' status='current'>
                        {festival.status}
                      </Chip>
                    </>
                  }
                />
              ))}
        </div>
      )}
    </div>
  );
};

export default HomeFestivalList;
