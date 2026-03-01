import type { KeyboardEvent, SyntheticEvent } from 'react';

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

  const handleKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (onClick && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onClick();
    }
  };

  const handleImageError = (event: SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = IMAGES.EMPTY_NOTICE_IMAGE;
  };

  return (
    <article
      className={styles.notice}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role='button'
      aria-label={`${title} 상세 보기`}
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
    </article>
  );
};

export default CardNotice;
