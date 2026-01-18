import { CardFestival, Chip } from '@amp/ads-ui';

interface FestivalItem {
  festivalId: number;
  mainImageUrl: string;
  title: string;
  period: string;
  status: string;
}

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
    <Chip variant='status' status='dday'>
      진행 완료
    </Chip>
  );
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
