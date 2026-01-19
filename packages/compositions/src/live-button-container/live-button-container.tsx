import { LiveButton } from '@amp/ads-ui';

import * as styles from './live-button-container.css';

type LiveStatusType = '여유' | '보통' | '혼잡';

interface LiveStatusListProps {
  items: {
    id: number;
    title: string;
    location?: string | null;
    congestionLevel: string;
  }[];
  onClick?: (id: number) => void;
}

// TODO: 추후 실제 이미지 import 하고 변경
const STATUS_IMAGES: Record<LiveStatusType, string> = {
  여유: 'https://png.pngtree.com/thumb_back/fh260/background/20210422/pngtree-abstract-decorative-mint-green-background-image_637109.jpg',
  보통: 'https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-3356.jpg?semt=ais_hybrid&w=740&q=80',
  혼잡: 'https://png.pngtree.com/thumb_back/fh260/background/20210207/pngtree-red-solid-color-simple-background-image_556968.jpg',
};

const LiveButtonContainer = ({ items, onClick }: LiveStatusListProps) => {
  return (
    <div className={styles.liveButtonContainer}>
      {items.map((item) => {
        const statusImageUrl =
          STATUS_IMAGES[item.congestionLevel as LiveStatusType];

        return (
          <LiveButton
            key={item.id}
            title={item.title}
            subText={item.location ?? ''}
            imageUrl={statusImageUrl}
            onClick={() => onClick?.(item.id)}
          />
        );
      })}
    </div>
  );
};

export default LiveButtonContainer;
