import { generatePath, useNavigate } from 'react-router';

import FestivalCard from '@widgets/home/festival-card/festival-card';

import { ROUTE_PATH } from '@shared/constants/path';
import type { Festival } from '@shared/types/home-response';

interface FestivalHistoryListProps {
  festivals: Festival[];
}

const FestivalHistoryList = ({ festivals }: FestivalHistoryListProps) => {
  const navigate = useNavigate();

  const handleCardClick = (festivalId: number) => {
    navigate(
      generatePath(ROUTE_PATH.NOTICE_LIST, {
        eventId: String(festivalId),
      }),
    );
  };

  return (
    <>
      {festivals.map((festival) => {
        return (
          <FestivalCard
            key={festival.festivalId}
            festival={festival}
            onCardClick={handleCardClick}
          />
        );
      })}
    </>
  );
};

export default FestivalHistoryList;
