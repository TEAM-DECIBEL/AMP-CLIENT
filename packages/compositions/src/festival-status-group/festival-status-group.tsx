import { Chip } from '@amp/ads-ui';
import type { FestivalStatus } from '@amp/shared/types';
interface FestivalStatusGroupProps {
  dDay?: string;
  status?: FestivalStatus;
  statusText?: string;
  isWishlist?: boolean;
}

const FestivalStatusGroup = ({
  dDay,
  status = 'upcoming',
  statusText,
  isWishlist,
}: FestivalStatusGroupProps) => {
  return (
    <>
      {dDay && (
        <Chip variant='status' status='dday'>
          {dDay}
        </Chip>
      )}

      {statusText && (
        <Chip variant='status' status={status}>
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
