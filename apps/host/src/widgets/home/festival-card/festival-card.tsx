import type { KeyboardEvent } from 'react';

import { CardFestival } from '@amp/ads-ui';
import { MoreIcon } from '@amp/ads-ui/icons';
import { FestivalStatusGroup } from '@amp/compositions';

import formatDday from '@shared/libs/format-dday';
import type { Festival } from '@shared/types/home-response';

interface FestivalCardProps {
  festival: Festival;
  onMoreClick: (festivalId: number) => void;
  onCardClick: (festivalId: number) => void;
}

const FestivalCard = ({
  festival,
  onMoreClick,
  onCardClick,
}: FestivalCardProps) => {
  const { festivalId, title, period, mainImageUrl, dDay, status } = festival;
  const chipStatus = status === '진행 중' ? 'current' : 'upcoming';

  return (
    <CardFestival
      role='button'
      tabIndex={0}
      onClick={() => onCardClick(festivalId)}
      onKeyDown={(event: KeyboardEvent<HTMLElement>) => {
        if (event.key === 'Enter' || event.key === ' ') {
          onCardClick(festivalId);
        }
      }}
    >
      <CardFestival.Image src={mainImageUrl ?? ''} alt={title} />
      <CardFestival.Body title={title} date={period}>
        <CardFestival.Chip>
          <FestivalStatusGroup
            dDay={formatDday(dDay)}
            status={chipStatus}
            statusText={status}
          />
        </CardFestival.Chip>
      </CardFestival.Body>

      <CardFestival.Icon>
        <button
          type='button'
          aria-label='더보기'
          onClick={(event) => {
            event.stopPropagation();
            onMoreClick(festivalId);
          }}
        >
          <MoreIcon aria-hidden />
        </button>
      </CardFestival.Icon>
    </CardFestival>
  );
};

export default FestivalCard;
