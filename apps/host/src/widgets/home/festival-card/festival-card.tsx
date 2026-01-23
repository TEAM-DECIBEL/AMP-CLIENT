import type { KeyboardEvent } from 'react';

import { CardFestival, Chip } from '@amp/ads-ui';
import { MoreIcon } from '@amp/ads-ui/icons';

import type { Festival } from '@shared/types/home-response';

import * as styles from './festival-card.css';

const getStatusKey = (status: Festival['status']) => {
  return status === '진행 중' ? 'ongoing' : 'upcoming';
};

const renderDDayChip = (dDay: number) => {
  if (dDay === 0) {
    return (
      <Chip variant='status' status='dday'>
        D-Day
      </Chip>
    );
  }

  if (dDay < 0) {
    return (
      <Chip variant='status' status='dday'>
        {`D-${Math.abs(dDay)}`}
      </Chip>
    );
  }

  return null;
};

const CHIP_ASSETS = {
  upcoming: (
    <Chip variant='status' status='upcoming'>
      진행 예정
    </Chip>
  ),
  ongoing: (
    <Chip variant='status' status='current'>
      진행 중
    </Chip>
  ),
} as const;

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
  const imageSrc = festival.mainImageUrl ?? '';

  return (
    <CardFestival
      className={styles.cardButton}
      role='button'
      tabIndex={0}
      onClick={() => onCardClick(festival.festivalId)}
      onKeyDown={(event: KeyboardEvent<HTMLElement>) => {
        if (event.key === 'Enter' || event.key === ' ') {
          onCardClick(festival.festivalId);
        }
      }}
    >
      {imageSrc && <CardFestival.Image src={imageSrc} alt={festival.title} />}

      <CardFestival.Body title={festival.title} date={festival.period}>
        <CardFestival.Chip>
          {renderDDayChip(festival.dDay)}
          {CHIP_ASSETS[getStatusKey(festival.status)]}
        </CardFestival.Chip>
      </CardFestival.Body>

      <CardFestival.Icon>
        <button
          type='button'
          className={styles.moreButton}
          aria-label='더보기'
          onClick={(event) => {
            event.stopPropagation();
            onMoreClick(festival.festivalId);
          }}
        >
          <MoreIcon aria-hidden />
        </button>
      </CardFestival.Icon>
    </CardFestival>
  );
};

export default FestivalCard;
