import { CardFestival, Chip, FlagButton } from '@amp/ads-ui';

import type {
  AllFestivalItem,
  UpcomingFestivalItem,
} from '@shared/types/home-response';

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
  const isAllEmpty = selectedTab === 'all' && allFestivals.length === 0;
  const isUpcomingEmpty =
    selectedTab === 'upcoming' && upcomingFestivals.length === 0;

  const emptyText =
    selectedTab === 'all'
      ? '등록한 공연이 아직 없어요.'
      : '관람 예정인 공연이 없어요.';

  return (
    <div className={content}>
      {isAllEmpty || isUpcomingEmpty ? (
        <HomeFestivalEmpty image={null} text={emptyText} />
      ) : (
        <div className={cardList}>
          {selectedTab === 'all'
            ? allFestivals.map((festival) => (
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
                      onChange={(nextSelected) =>
                        onToggleAllFestival(festival.festivalId, nextSelected)
                      }
                    />
                  </CardFestival.Button>
                </CardFestival>
              ))
            : upcomingFestivals.map((festival) => (
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
                      onChange={(nextSelected) =>
                        onToggleUpcomingFestival(
                          festival.festivalId,
                          nextSelected,
                        )
                      }
                    />
                  </CardFestival.Button>
                </CardFestival>
              ))}
        </div>
      )}
    </div>
  );
};

export default HomeFestivalList;
