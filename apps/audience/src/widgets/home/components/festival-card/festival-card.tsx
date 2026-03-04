import { CardFestival } from '@amp/ads-ui';
import { FestivalStatusGroup } from '@amp/compositions';
import { formatDday } from '@amp/shared/utils';

import { useToggleWishListMutation } from '@features/usecase/toggle-wishlist/use-toggle-wishlist-mutation';

import type {
  AllFestivalItem,
  UpcomingFestivalItem,
} from '@shared/types/home-response';

import FlagButton from '../flag-button/flag-button';

interface FestivalCardProps {
  festival: AllFestivalItem | UpcomingFestivalItem;
  onClick: () => void;
}

const FestivalCard = ({ festival, onClick }: FestivalCardProps) => {
  const { festivalId, title, period, mainImageUrl, wishList, dDay } = festival;
  const { toggleWishList, isTogglePending } = useToggleWishListMutation(
    festivalId,
    wishList,
  );

  return (
    <CardFestival onClick={onClick}>
      <CardFestival.Image src={mainImageUrl} alt={title} />
      <CardFestival.Body title={title} date={period}>
        <CardFestival.Chip>
          <FestivalStatusGroup dDay={formatDday(dDay)} isWishlist={wishList} />
        </CardFestival.Chip>
      </CardFestival.Body>
      <CardFestival.Button>
        <FlagButton
          selected={wishList}
          onChange={toggleWishList}
          disabled={isTogglePending}
        />
      </CardFestival.Button>
    </CardFestival>
  );
};

export default FestivalCard;
