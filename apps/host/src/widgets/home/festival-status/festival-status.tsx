import { CardFestival, Chip } from '@amp/ads-ui';
import { MoreIcon } from '@amp/ads-ui/icons';

import type { Festival } from '@shared/types/home-response';
import EmptyCard from '@shared/ui/card/empty-card/empty-card';
import HomeChip from '@shared/ui/chip/home-chip/home-chip';

import * as styles from './festival-status.css';

interface FestivalStatusProps {
  ongoingCount: number;
  upcomingCount: number;
  ongoingFestivals: Festival[];
  upcomingFestivals: Festival[];
}

const FestivalStatus = ({
  ongoingCount,
  upcomingCount,
  ongoingFestivals,
  upcomingFestivals,
}: FestivalStatusProps) => {
  const CHIP_ASSETS = {
    upcoming: (
      <Chip variant='status' status='upcoming'>
        진행 예정
      </Chip>
    ),
    ongoing: (
      <Chip variant='status' status='current'>
        진행 중
      </Chip>
    ),
    done: (
      <Chip variant='status' status='upcoming'>
        종료됨
      </Chip>
    ),
  } as const;

  const getStatusKey = (status: Festival['status']) => {
    return status === '진행 중' ? 'ongoing' : 'upcoming';
  };

  const renderDDayChip = (dDay: number) => {
    if (dDay === 0) {
      return (
        <Chip variant='status' status='dday'>
          D-Day
        </Chip>
      );
    }

    if (dDay < 0) {
      return (
        <Chip variant='status' status='dday'>
          {`D-${Math.abs(dDay)}`}
        </Chip>
      );
    }

    return null;
  };

  const sections = [
    {
      title: '진행 중인 공연',
      count: ongoingCount,
      festivals: ongoingFestivals,
      emptyText: '진행 중인 공연이 없어요!',
    },
    {
      title: '진행 예정 공연',
      count: upcomingCount,
      festivals: upcomingFestivals,
      emptyText: '진행 예정인 공연이 없어요!',
    },
  ] as const;

  return (
    <div className={styles.container}>
      {sections.map(({ title, count, festivals, emptyText }) => (
        <div key={title} className={styles.section}>
          <HomeChip title={title} count={count} />
          {festivals.length === 0 ? (
            <EmptyCard>{emptyText}</EmptyCard>
          ) : (
            <div className={styles.list}>
              {festivals.map((festival) => (
                <div key={festival.festivalId} className={styles.item}>
                  <CardFestival>
                    <CardFestival.Image
                      src={festival.mainImageUrl}
                      alt={festival.title}
                    />
                    <CardFestival.Body
                      title={festival.title}
                      date={festival.period}
                    >
                      <CardFestival.Chip>
                        {renderDDayChip(festival.dDay)}
                        {CHIP_ASSETS[getStatusKey(festival.status)]}
                      </CardFestival.Chip>
                    </CardFestival.Body>
                    <CardFestival.Icon>
                      <button
                        type='button'
                        className={styles.moreButton}
                        aria-label='더보기'
                      >
                        <MoreIcon aria-hidden />
                      </button>
                    </CardFestival.Icon>
                  </CardFestival>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FestivalStatus;
