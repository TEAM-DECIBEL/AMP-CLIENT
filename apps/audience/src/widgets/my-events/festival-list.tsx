import { CardFestival, Chip } from '@amp/ads-ui';

type MyEventsStatus = '관람 중' | '관람 예정';

interface FestivalItem {
  festivalId: number;
  title: string;
  mainImageUrl: string;
  period: string;
  status: MyEventsStatus;
}

const getStatusChip = (status: MyEventsStatus) => {
  if (status === '관람 중') {
    return (
      <Chip variant='status' status='current'>
        관람 중
      </Chip>
    );
  }

  return (
    <Chip variant='status' status='upcoming'>
      관람 예정
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
