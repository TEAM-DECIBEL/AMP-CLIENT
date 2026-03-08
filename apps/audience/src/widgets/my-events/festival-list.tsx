import { useNavigate } from 'react-router';

import FestivalCard from '@widgets/home/components/festival-card/festival-card';

import { ROUTE } from '@shared/constants/path';
import type { Festival } from '@shared/types/festival';

interface FestivalListProps {
  festivals: Festival[];
}

const FestivalList = ({ festivals }: FestivalListProps) => {
  const navigate = useNavigate();

  const handleCardClick = (festivalId: number) => {
    navigate(ROUTE.noticeList(festivalId));
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
