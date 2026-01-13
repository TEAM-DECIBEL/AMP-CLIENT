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
      <img src={imageUrl} alt={title} className={styles.image} />

      <div>
        <div className={styles.header}>
          <p className={styles.title}>{title}</p>

          <div className={styles.status}>
            {isPinned ? (
              <PinIcon />
            ) : createdAt ? (
              <span className={styles.date}>{createdAt}</span>
            ) : null}
          </div>
        </div>

        <div className={styles.content}>{content}</div>
      </div>
    </article>
  );
};

export default CardNotice;
