import type { ReactElement } from 'react';

import { CardFestival, Chip } from '@amp/ads-ui';
import { IMAGES } from '@amp/compositions/assets';

import type { FestivalBase, FestivalStatus } from '@shared/types/festival';

const STATUS_CHIP: Record<FestivalStatus, ReactElement> = {
  '진행 중': (
    <Chip variant='status' status='current'>
      진행 중
    </Chip>
  ),
  '진행 예정': (
    <Chip variant='status' status='upcoming'>
      진행 예정
    </Chip>
  ),
  '진행 완료': (
    <Chip variant='status' status='completed'>
      진행 완료
    </Chip>
  ),
};

const getStatusChip = (status: FestivalStatus) => {
  return STATUS_CHIP[status];
};

interface FestivalListProps {
  festivals: FestivalBase[];
}

const FestivalList = ({ festivals }: FestivalListProps) => {
  return (
    <>
      {festivals.map((festival) => (
        <CardFestival key={festival.festivalId}>
          <CardFestival.Image
            src={festival.imageUrl ?? IMAGES.EMPTY_NOTICE}
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
