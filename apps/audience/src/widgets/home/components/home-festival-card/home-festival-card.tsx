import type { ReactNode } from 'react';

import { CardFestival, FlagButton } from '@amp/ads-ui';

interface HomeFestivalCardProps {
  title: string;
  period: string;
  imageUrl: string;
  wishList: boolean;
  chips: ReactNode;
  onToggle: (nextSelected: boolean) => void;
}

const HomeFestivalCard = ({
  title,
  period,
  imageUrl,
  wishList,
  chips,
  onToggle,
}: HomeFestivalCardProps) => {
  return (
    <CardFestival>
      <CardFestival.Image src={imageUrl} alt={title} />
      <CardFestival.Body title={title} date={period}>
        <CardFestival.Chip>{chips}</CardFestival.Chip>
      </CardFestival.Body>
      <CardFestival.Button>
        <FlagButton selected={wishList} onChange={onToggle} />
      </CardFestival.Button>
    </CardFestival>
  );
};

export default HomeFestivalCard;
