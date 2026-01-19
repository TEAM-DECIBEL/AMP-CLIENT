import { CardFestival, Chip } from '@amp/ads-ui';

import type { FestivalBase } from '@shared/types/festival';

const getStatusChip = (status: string) => {
  if (status === '진행 중') {
    return (
      <Chip variant='status' status='current'>
        진행 중
      </Chip>
    );
  }

  if (status === '진행 예정') {
    return (
      <Chip variant='status' status='upcoming'>
        진행 예정
      </Chip>
    );
  }

  return (
    <Chip variant='status' status='completed'>
      진행 완료
    </Chip>
  );
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
