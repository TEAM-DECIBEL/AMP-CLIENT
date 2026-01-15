import { ArrowIcon } from '../../../icons';

import * as styles from './live-button.css';

type LiveButtonProps = {
  title: string;
  subText?: string;
  showIcon?: boolean;
  imageUrl: string;
  onClick: () => void;
};

const LiveButton = ({
  title,
  subText,
  showIcon = false,
  imageUrl,
  onClick,
}: LiveButtonProps) => {
  return (
    <button
      type='button'
      className={styles.liveButtonContainer}
      onClick={onClick}
    >
      <img src={imageUrl} alt={`${title} 썸네일`} className={styles.img} />

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
