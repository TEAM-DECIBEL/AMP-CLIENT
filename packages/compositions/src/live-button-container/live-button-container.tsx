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
  여유: 'https://dummyimage.com/600x360/27ae60/ffffff&text=LOW',
  보통: 'https://dummyimage.com/600x360/f1c40f/ffffff&text=MEDIUM',
  혼잡: 'https://dummyimage.com/600x360/e74c3c/ffffff&text=HIGH',
};

const LiveButtonContainer = ({
  items,

  onClick,
}: LiveStatusListProps) => {
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
