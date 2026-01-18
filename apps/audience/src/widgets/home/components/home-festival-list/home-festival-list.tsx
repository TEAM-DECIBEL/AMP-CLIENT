import { Chip, EmptyView } from '@amp/ads-ui';

import {
  TAB_ALL,
  TAB_UPCOMING,
  type TabValue,
} from '@widgets/home/constants/home-tabs';

import formatDday from '@shared/libs/format-dday';
import type {
  AllFestivalItem,
  UpcomingFestivalItem,
} from '@shared/types/home-response';

import HomeFestivalCard from '../home-festival-card/home-festival-card';

import { cardList, content, emptyWrapper } from './home-festival-list.css';

interface HomeFestivalListProps {
  selectedTab: TabValue;
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
    [TAB_ALL]: {
      isEmpty: allFestivals.length === 0,
      text: '등록한 공연이 아직 없어요.',
    },
    [TAB_UPCOMING]: {
      isEmpty: upcomingFestivals.length === 0,
      text: '관람 예정인 공연이 없어요.',
    },
  } as const;

  return (
    <div className={content}>
      {emptyConfig[selectedTab].isEmpty ? (
        <div className={emptyWrapper}>
          <EmptyView title={emptyConfig[selectedTab].text} />
        </div>
      ) : (
        <div className={cardList}>
          {selectedTab === TAB_ALL
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
                        {formatDday(festival.dDay)}
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
                        {formatDday(festival.dDay)}
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
