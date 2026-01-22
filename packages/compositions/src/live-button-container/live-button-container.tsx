import { LiveButton, StatusSheetValue } from '@amp/ads-ui';

import * as styles from './live-button-container.css';

interface LiveButtonContainerProps {
  items: {
    stageId: number;
    title: string;
    location?: string | null;
    congestionLevel: string;
  }[];
  showIcon?: boolean;
  isDisabled?: boolean;
  onClick?: (id: number) => void;
}

// TODO: 이전 PR 머지하고 다시 확인
const STATUS_IMAGES: Record<StatusSheetValue, string> = {
  SMOOTH: 'https://dummyimage.com/600x360/27ae60/ffffff&text=LOW',
  NORMAL: 'https://dummyimage.com/600x360/f1c40f/ffffff&text=MEDIUM',
  CROWDED: 'https://dummyimage.com/600x360/e74c3c/ffffff&text=HIGH',
  NONE: '',
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
            key={item.stageId}
            title={item.title}
            subText={item.location ?? ''}
            imageUrl={statusImageUrl}
            showIcon={showIcon}
            isDisabled={isDisabled}
            onClick={() => onClick?.(item.stageId)}
          />
        );
      })}
    </div>
  );
};

export default LiveButtonContainer;
