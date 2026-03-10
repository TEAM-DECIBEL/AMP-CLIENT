import clsx from 'clsx';

import { ArrowIcon } from '../../../icons';
import Chip from '../../chip/chip';

import * as styles from './live-button.css';

type CongestionLevel = 'SMOOTH' | 'NORMAL' | 'CROWDED' | 'NONE';
type CongestionChipStatus = 'smooth' | 'normal' | 'crowded' | 'none';

type LiveButtonProps = {
  title: string;
  subText?: string;
  showIcon?: boolean;
  imageUrl: string;
  congestionLevel?: string;
  isDisabled: boolean;
  onClick: () => void;
};

const CONGESTION_LABEL: Record<CongestionLevel, string> = {
  SMOOTH: '여유',
  NORMAL: '보통',
  CROWDED: '혼잡',
  NONE: '조정중',
};

const CONGESTION_CHIP_STATUS: Record<CongestionLevel, CongestionChipStatus> = {
  SMOOTH: 'smooth',
  NORMAL: 'normal',
  CROWDED: 'crowded',
  NONE: 'none',
};

const toCongestionLevel = (value?: string): CongestionLevel | null => {
  if (
    value === 'SMOOTH' ||
    value === 'NORMAL' ||
    value === 'CROWDED' ||
    value === 'NONE'
  ) {
    return value;
  }

  return null;
};

const LiveButton = ({
  title,
  subText,
  showIcon = false,
  imageUrl,
  congestionLevel,
  isDisabled,
  onClick,
}: LiveButtonProps) => {
  const level = toCongestionLevel(congestionLevel);

  return (
    <button
      type='button'
      className={clsx(
        styles.liveButtonContainer,
        isDisabled && styles.disabled,
      )}
      onClick={onClick}
    >
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt={`${title} 썸네일`} className={styles.img} />
        {level && (
          <Chip
            variant='congestion'
            status={CONGESTION_CHIP_STATUS[level]}
            className={styles.statusChip}
          >
            {CONGESTION_LABEL[level]}
          </Chip>
        )}
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <p className={styles.title}>{title}</p>
          {subText && <p className={styles.subText}>{subText}</p>}
        </div>

        <div className={styles.iconContainer} aria-hidden>
          {showIcon && <ArrowIcon />}
        </div>
      </div>
    </button>
  );
};

export default LiveButton;
