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
          <span className={styles.title}>{title}</span>
          <span className={styles.subText}>{subText}</span>
        </div>

        <div className={styles.iconContainer} aria-hidden>
          {showIcon ? <ArrowIcon /> : null}
        </div>
      </div>
    </button>
  );
};

export default LiveButton;
