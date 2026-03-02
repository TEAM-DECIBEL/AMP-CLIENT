import type { KeyboardEvent } from 'react';

import { CardFestival } from '@amp/ads-ui';
import { MoreIcon } from '@amp/ads-ui/icons';
import { FestivalStatusGroup } from '@amp/compositions';

import formatDday from '@shared/libs/format-dday';
import type { Festival } from '@shared/types/home-response';

const STATUS_BY_TEXT = {
  '진행 중': 'current',
  '진행 완료': 'completed',
  '진행 예정': 'upcoming',
} as const;

interface FestivalCardProps {
  festival: Festival;
  onMoreClick?: (festivalId: number) => void;
  onCardClick: (festivalId: number) => void;
}

const FestivalCard = ({
  festival,
  onMoreClick,
  onCardClick,
}: FestivalCardProps) => {
  const { festivalId, title, period, mainImageUrl, dDay, status, imageUrl } =
    festival;

  const chipStatus =
    STATUS_BY_TEXT[status as keyof typeof STATUS_BY_TEXT] ?? 'completed';
  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.currentTarget !== event.target) {
      return;
    }

    if (event.key === 'Enter' || event.key === ' ') {
      if (event.key === ' ') {
        event.preventDefault();
      }
      onCardClick(festivalId);
    }
  };

  return (
    <CardFestival
      role='button'
      tabIndex={0}
      onClick={() => onCardClick(festivalId)}
      onKeyDown={handleKeyDown}
    >
      <CardFestival.Image src={mainImageUrl ?? imageUrl ?? ''} alt={title} />
      <CardFestival.Body title={title} date={period}>
        <CardFestival.Chip>
          <FestivalStatusGroup
            dDay={typeof dDay === 'number' ? formatDday(dDay) : undefined}
            status={chipStatus}
            statusText={status}
          />
        </CardFestival.Chip>
      </CardFestival.Body>

      {onMoreClick && (
        <CardFestival.Icon>
          <button
            type='button'
            onClick={(e) => {
              e.stopPropagation();
              onMoreClick(festivalId);
            }}
          >
            <MoreIcon />
          </button>
        </CardFestival.Icon>
      )}
    </CardFestival>
  );
};

export default FestivalCard;
