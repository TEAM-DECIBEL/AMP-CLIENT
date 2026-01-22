import type { ReactNode } from 'react';

import { CardFestival, FlagButton } from '@amp/ads-ui';

interface HomeFestivalCardProps {
  title: string;
  period: string;
  imageUrl: string;
  wishList: boolean;
  chips: ReactNode;
  onClick: () => void;
  onToggle: (nextSelected: boolean) => void;
}

const HomeFestivalCard = ({
  title,
  period,
  imageUrl,
  wishList,
  chips,
  onClick,
  onToggle,
}: HomeFestivalCardProps) => {
  return (
    <CardFestival onClick={onClick}>
      <CardFestival.Image src={imageUrl} alt={title} />
      <CardFestival.Body title={title} date={period}>
        <CardFestival.Chip>{chips}</CardFestival.Chip>
      </CardFestival.Body>
      <CardFestival.Button>
        <span
          onClick={(e) => {
            e.stopPropagation();
          }}
          onPointerDown={(e) => {
            e.stopPropagation();
          }}
        >
          <FlagButton selected={wishList} onChange={onToggle} />
        </span>
      </CardFestival.Button>
    </CardFestival>
  );
};

export default HomeFestivalCard;
