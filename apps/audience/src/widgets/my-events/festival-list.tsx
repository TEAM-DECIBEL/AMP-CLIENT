import type { ReactElement } from 'react';

import { CardFestival, Chip } from '@amp/ads-ui';

type MyEventsStatus = '관람 중' | '관람 예정';

interface FestivalItem {
  festivalId: number;
  title: string;
  mainImageUrl: string;
  period: string;
  status: MyEventsStatus;
}

const STATUS_CHIP: Record<MyEventsStatus, ReactElement> = {
  '관람 중': (
    <Chip variant='status' status='current'>
      관람 중
    </Chip>
  ),
  '관람 예정': (
    <Chip variant='status' status='upcoming'>
      관람 예정
    </Chip>
  ),
};

const getStatusChip = (status: MyEventsStatus) => {
  return STATUS_CHIP[status];
};

interface FestivalListProps {
  festivals: FestivalItem[];
}

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
              {getStatusChip(festival.status)}
            </CardFestival.Chip>
          </CardFestival.Body>
        </CardFestival>
      ))}
    </>
  );
};

export default FestivalList;
