import { Chip } from '@amp/ads-ui';

interface FestivalStatusGroupProps {
  dDay?: string;
  statusText?: string;
  isWishlist?: boolean;
}

const FestivalStatusGroup = ({
  dDay,
  statusText,
  isWishlist,
}: FestivalStatusGroupProps) => {
  const getChipStatus = (text: string) => {
    if (text === '진행 중') {
      return 'current';
    }
    if (text === '진행 완료') {
      return 'completed';
    }
    return 'upcoming';
  };
  return (
    <>
      {dDay && (
        <Chip variant='status' status='dday'>
          {dDay}
        </Chip>
      )}

      {statusText && (
        <Chip variant='status' status={getChipStatus(statusText)}>
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
