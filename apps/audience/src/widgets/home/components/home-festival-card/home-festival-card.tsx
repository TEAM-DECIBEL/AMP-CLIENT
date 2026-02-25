import { CardFestival, FlagButton } from '@amp/ads-ui';
import { FestivalStatusGroup } from '@amp/compositions';

import { useToggleWishListMutation } from '@features/notice-list/hooks/use-toggle-wishlist-mutation';

import formatDday from '@shared/libs/format-dday';
import type {
  AllFestivalItem,
  UpcomingFestivalItem,
} from '@shared/types/home-response';

interface HomeFestivalCardProps {
  festival: AllFestivalItem | UpcomingFestivalItem;
  onClick: () => void;
}

const HomeFestivalCard = ({ festival, onClick }: HomeFestivalCardProps) => {
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

export default HomeFestivalCard;
