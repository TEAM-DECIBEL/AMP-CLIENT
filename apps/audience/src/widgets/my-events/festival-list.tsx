import { generatePath, useNavigate } from 'react-router';

import FestivalCard from '@widgets/home/components/festival-card/festival-card';

import { ROUTE_PATH } from '@shared/constants/path';
import type { Festival } from '@shared/types/festival';

interface FestivalListProps {
  festivals: Festival[];
}

const FestivalList = ({ festivals }: FestivalListProps) => {
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
            showWishList={false}
            onCardClick={handleCardClick}
          />
        );
      })}
    </>
  );
};

export default FestivalList;
