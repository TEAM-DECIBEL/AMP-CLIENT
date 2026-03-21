import type { KeyboardEvent } from 'react';

import { CardFestival } from '@amp/ads-ui';
import { FestivalStatusGroup } from '@amp/compositions';
import { formatDday } from '@amp/shared/utils';

import { useToggleWishListMutation } from '@features/usecase/toggle-wishlist/use-toggle-wishlist-mutation';

import type { Festival } from '@shared/types/festival';

import FlagButton from '../flag-button/flag-button';

interface FestivalCardProps {
  festival: Festival;
  onCardClick: (festivalId: number) => void;
  showWishList?: boolean;
  showStatus?: boolean;
}

const STATUS_BY_TEXT = {
  '관람 중': 'current',
  '관람 완료': 'completed',
  '관람 예정': 'upcoming',
} as const;

const FestivalCard = ({
  festival,
  showWishList = true,
  showStatus = true,
  onCardClick,
}: FestivalCardProps) => {
  const {
    festivalId,
    title,
    period,
    mainImageUrl,
    wishList = false,
    status,
    dDay,
  } = festival;

  const { toggleWishList, isTogglePending } = useToggleWishListMutation(
    festivalId,
    wishList,
  );

  const chipStatus =
    STATUS_BY_TEXT[status as keyof typeof STATUS_BY_TEXT] ?? 'completed';

  const handleCardClick = () => {
    onCardClick(festivalId);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.currentTarget !== event.target) {
      return;
    }

    if (event.key === 'Enter' || event.key === ' ') {
      if (event.key === ' ') {
        event.preventDefault();
      }
      handleCardClick();
    }
  };

  return (
    <CardFestival
      role='button'
      tabIndex={0}
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
    >
      <CardFestival.Image src={mainImageUrl} alt={title} />
      <CardFestival.Body title={title} date={period}>
        <CardFestival.Chip>
          <FestivalStatusGroup
            dDay={typeof dDay === 'number' ? formatDday(dDay) : undefined}
            status={chipStatus}
            statusText={showStatus ? status : ''}
            isWishlist={showWishList ? wishList : false}
          />
        </CardFestival.Chip>
      </CardFestival.Body>
      {showWishList && (
        <CardFestival.Button>
          <FlagButton
            selected={wishList}
            onChange={toggleWishList}
            disabled={isTogglePending}
            festivalId={festivalId}
          />
        </CardFestival.Button>
      )}
    </CardFestival>
  );
};

export default FestivalCard;
