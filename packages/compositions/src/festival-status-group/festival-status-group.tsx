import { Chip } from '@amp/ads-ui';

interface FestivalStatusGroupProps {
  dDay: string;
  statusText?: string;
  isWishlist?: boolean;
}

const FestivalStatusGroup = ({
  dDay,
  statusText,
  isWishlist,
}: FestivalStatusGroupProps) => {
  return (
    <>
      <Chip variant='status' status='dday'>
        {dDay}
      </Chip>

      {statusText && (
        <Chip
          variant='status'
          status={statusText === '진행 중' ? 'current' : 'upcoming'}
        >
          {statusText}
        </Chip>
      )}

      {isWishlist && (
        <Chip variant='status' status='current'>
          관람 예정
        </Chip>
      )}
    </>
  );
};

export default FestivalStatusGroup;
