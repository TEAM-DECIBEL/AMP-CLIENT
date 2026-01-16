import { CardFestival, Chip, FlagButton } from '@amp/ads-ui';

import { cardList, content } from '../home-festival-section/home-festival-section.css';
import type {
  AllFestivalItem,
  UpcomingFestivalItem,
} from '@shared/types/home-response';

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
  return (
    <div className={content}>
      <div className={cardList}>
        {selectedTab === 'all'
          ? allFestivals.map((festival) => (
              <CardFestival key={festival.festivalId}>
                <CardFestival.Image
                  src={festival.mainImageUrl}
                  alt={festival.title}
                />
                <CardFestival.Body title={festival.title} date={festival.period}>
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
                <CardFestival.Body title={festival.title} date={festival.period}>
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
    </div>
  );
};

export default HomeFestivalList;
