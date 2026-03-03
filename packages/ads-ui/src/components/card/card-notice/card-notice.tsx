import type { SyntheticEvent } from 'react';

import { IMAGES } from '../../../assets';
import { PinIcon } from '../../../icons';

import * as styles from './card-notice.css';

interface CardNoticeProps {
  imageUrl: string;
  title: string;
  content: string;
  isPinned?: boolean;
  createdAt?: string;
  onClick?: () => void;
}

const CardNotice = ({
  imageUrl,
  title,
  content,
  isPinned,
  createdAt,
  onClick,
}: CardNoticeProps) => {
  const displayImage = imageUrl || IMAGES.EMPTY_NOTICE_IMAGE;

  const handleImageError = (event: SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = IMAGES.EMPTY_NOTICE_IMAGE;
  };

  return (
    <button
      className={styles.notice}
      onClick={onClick}
      aria-label={`${title} 상세 보기`}
      type='button'
    >
      <img
        src={displayImage}
        alt={`${title} 공지 이미지`}
        className={styles.image}
        onError={handleImageError}
      />

      <div className={styles.textContainer}>
        <p className={styles.title}>{title}</p>

        <div className={styles.status}>
          {isPinned && <PinIcon className={styles.icon} />}

          {!isPinned && createdAt && (
            <span className={styles.date}>{createdAt}</span>
          )}
        </div>

        <div className={styles.content}>{content}</div>
      </div>
    </button>
  );
};

export default CardNotice;
