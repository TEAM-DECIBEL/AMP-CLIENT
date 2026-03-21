import clsx from 'clsx';

import { ArrowIcon } from '../../../icons';
import Chip from '../../chip/chip';

import * as styles from './live-button.css';

type CongestionChipStatus = 'smooth' | 'normal' | 'crowded' | 'none';

const CONGESTION_CONFIG = {
  SMOOTH: { label: '여유', status: 'smooth' },
  NORMAL: { label: '보통', status: 'normal' },
  CROWDED: { label: '혼잡', status: 'crowded' },
  NONE: { label: '조정중', status: 'none' },
} as const satisfies Record<
  string,
  { label: string; status: CongestionChipStatus }
>;

type CongestionLevel = keyof typeof CONGESTION_CONFIG;

interface LiveButtonProps {
  title: string;
  subText?: string;
  showIcon?: boolean;
  imageUrl: string;
  congestionLevel?: string;
  isDisabled: boolean;
  onClick: () => void;
}

const isCongestionLevel = (value: string): value is CongestionLevel =>
  value in CONGESTION_CONFIG;

const toCongestionLevel = (value?: string): CongestionLevel | null => {
  if (value && isCongestionLevel(value)) {
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
  const congestionMeta = level ? CONGESTION_CONFIG[level] : null;

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
        {congestionMeta && (
          <Chip
            variant='congestion'
            status={congestionMeta.status}
            className={styles.statusChip}
          >
            {congestionMeta.label}
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
