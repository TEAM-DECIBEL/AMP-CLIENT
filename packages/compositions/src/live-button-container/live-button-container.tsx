import { LiveButton, StatusSheetValue } from '@amp/ads-ui';

import * as styles from './live-button-container.css';

interface LiveButtonContainerProps {
  items: {
    id: number;
    title: string;
    location?: string | null;
    congestionLevel: string;
  }[];
  showIcon?: boolean;
  isDisabled?: boolean;
  onClick?: (id: number) => void;
}

// TODO: 추후 실제 이미지 import 하고 변경
const STATUS_IMAGES: Record<StatusSheetValue, string> = {
  여유: 'https://dummyimage.com/600x360/27ae60/ffffff&text=LOW',
  보통: 'https://dummyimage.com/600x360/f1c40f/ffffff&text=MEDIUM',
  혼잡: 'https://dummyimage.com/600x360/e74c3c/ffffff&text=HIGH',
};

const LiveButtonContainer = ({
  items,
  showIcon = false,
  isDisabled = false,
  onClick,
}: LiveButtonContainerProps) => {
  return (
    <div className={styles.liveButtonContainer}>
      {items.map((item) => {
        const statusImageUrl =
          STATUS_IMAGES[item.congestionLevel as StatusSheetValue];

        return (
          <LiveButton
            key={item.id}
            title={item.title}
            subText={item.location ?? ''}
            imageUrl={statusImageUrl}
            showIcon={showIcon}
            isDisabled={isDisabled}
            onClick={() => onClick?.(item.id)}
          />
        );
      })}
    </div>
  );
};

export default LiveButtonContainer;
