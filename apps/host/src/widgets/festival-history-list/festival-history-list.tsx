import { generatePath, useNavigate } from 'react-router';

import { CardFestival } from '@amp/ads-ui';
import { FestivalStatusGroup } from '@amp/compositions';

import { ROUTE_PATH } from '@shared/constants/path';
import type { FestivalBase } from '@shared/types/festival';

interface FestivalHistoryListProps {
  festivals: FestivalBase[];
}

const FestivalHistoryList = ({ festivals }: FestivalHistoryListProps) => {
  const navigate = useNavigate();

  const handleCardClick = (festivalId?: number) => {
    if (!festivalId) {
      return;
    }
    navigate(
      generatePath(ROUTE_PATH.NOTICE_LIST, {
        eventId: String(festivalId),
      }),
    );
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
          >
            <CardFestival.Image src={imageUrl ?? ''} alt={title} />
            <CardFestival.Body title={title} date={period}>
              <CardFestival.Chip>
                <FestivalStatusGroup statusText={status} />
              </CardFestival.Chip>
            </CardFestival.Body>
          </CardFestival>
        );
      })}
    </>
  );
};

export default FestivalHistoryList;
