import type { ReactNode } from 'react';

import { IMAGES } from '../../assets';

import * as styles from './empty-view.css';

interface EmptyViewProps {
  title: ReactNode;
  description?: ReactNode;
  imageType?: 'ticket' | 'alert';
}

const IMAGE_SRC = {
  ticket: IMAGES.EMPTY_VIEW_TICKET,
  alert: IMAGES.EMPTY_VIEW_ALERT,
} as const;

const EmptyView = ({
  title,
  description,
  imageType = 'ticket',
}: EmptyViewProps) => {
  const hasDescription = Boolean(description);

  return (
    <div className={styles.empty}>
      <img
        src={IMAGE_SRC[imageType]}
        className={styles.image}
        alt=''
        aria-hidden='true'
      />
      <div className={styles.textGroup}>
        <span
          className={
            hasDescription ? styles.titleWithDescription : styles.titleOnly
          }
        >
          {title}
        </span>
        {hasDescription && (
          <span className={styles.description}>{description}</span>
        )}
      </div>
    </div>
  );
};

export default EmptyView;
