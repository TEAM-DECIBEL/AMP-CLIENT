import { KeyboardEvent } from 'react';
import { generatePath, useNavigate } from 'react-router';

import { CardFestival } from '@amp/ads-ui';
import { FestivalStatusGroup } from '@amp/compositions';

import { ROUTE_PATH } from '@shared/constants/path';
import type { FestivalBase } from '@shared/types/festival';

const STATUS_BY_TEXT = {
  '진행 중': 'current',
  '진행 완료': 'completed',
  '진행 예정': 'upcoming',
} as const;

interface FestivalHistoryListProps {
  festivals: FestivalBase[];
}

const FestivalHistoryList = ({ festivals }: FestivalHistoryListProps) => {
  const navigate = useNavigate();

  const handleCardClick = (festivalId?: number) => {
    if (festivalId === null || festivalId === undefined) {
      return;
    }
    navigate(
      generatePath(ROUTE_PATH.NOTICE_LIST, {
        eventId: String(festivalId),
      }),
    );
  };

  const handleKeyDown = (event: KeyboardEvent, festivalId?: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleCardClick(festivalId);
    }
  };

  const getChipStatus = (text: string) => {
    const status = STATUS_BY_TEXT[text as keyof typeof STATUS_BY_TEXT];
    return status ?? 'completed';
  };

  return (
    <>
      {festivals.map((festival) => {
        const { festivalId, title, period, status, imageUrl } = festival;

        const key = festivalId ?? `${title}-${period}`;

        return (
          <CardFestival
            key={key}
            role='button'
            tabIndex={0}
            onClick={() => handleCardClick(festivalId)}
            onKeyDown={(event) => handleKeyDown(event, festivalId)}
          >
            <CardFestival.Image src={imageUrl ?? ''} alt={title} />
            <CardFestival.Body title={title} date={period}>
              <CardFestival.Chip>
                <FestivalStatusGroup
                  statusText={status}
                  status={getChipStatus(status)}
                />
              </CardFestival.Chip>
            </CardFestival.Body>
          </CardFestival>
        );
      })}
    </>
  );
};

export default FestivalHistoryList;
