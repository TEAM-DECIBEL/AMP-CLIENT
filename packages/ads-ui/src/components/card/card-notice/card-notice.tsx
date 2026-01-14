import { PinIcon } from '../../../icons';

import * as styles from './card-notice.css';

interface CardNoticeProps {
  imageUrl: string;
  title: string;
  content: string;
  isPinned?: boolean;
  createdAt?: string;
}

const CardNotice = ({
  imageUrl,
  title,
  content,
  isPinned,
  createdAt,
}: CardNoticeProps) => {
  return (
    <article className={styles.notice}>
      <img
        src={imageUrl}
        alt={`${title} 공지 이미지`}
        className={styles.image}
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
