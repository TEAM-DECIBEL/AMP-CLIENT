import type { ReactElement } from 'react';

import { CardFestival, Chip } from '@amp/ads-ui';

type MyEventsStatus = '관람 중' | '관람 예정' | '관람 완료';

import type { MyEventsFestival } from '@shared/types/my-events-response';

const STATUS_CHIP: Record<MyEventsStatus, ReactElement> = {
  '관람 중': (
    <Chip variant='status' status='current'>
      관람 중
    </Chip>
  ),
  '관람 예정': (
    <Chip variant='status' status='dday'>
      관람 예정
    </Chip>
  ),
  '관람 완료': (
    <Chip variant='status' status='upcoming'>
      관람 완료
    </Chip>
  ),
};

const getStatusChip = (status: MyEventsStatus) => {
  return STATUS_CHIP[status];
};

interface FestivalListProps {
  festivals: MyEventsFestival[];
}

const toMyEventsStatus = (status: string): MyEventsStatus | null => {
  if (status === '관람 중' || status === '진행 중') {
    return '관람 중';
  }
  if (status === '관람 예정' || status === '진행 예정') {
    return '관람 예정';
  }
  return null;
};

const FestivalList = ({ festivals }: FestivalListProps) => {
  return (
    <>
      {festivals.map((festival) => (
        <CardFestival key={festival.festivalId}>
          <CardFestival.Image
            src={festival.mainImageUrl}
            alt={festival.title}
          />
          <CardFestival.Body title={festival.title} date={festival.period}>
            <CardFestival.Chip>
              {(() => {
                const mapped = toMyEventsStatus(festival.status);
                return mapped ? getStatusChip(mapped) : null;
              })()}
            </CardFestival.Chip>
          </CardFestival.Body>
        </CardFestival>
      ))}
    </>
  );
};

export default FestivalList;
