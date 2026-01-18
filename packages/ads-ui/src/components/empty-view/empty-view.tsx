import type { ReactNode } from 'react';

import * as styles from './empty-view.css';

interface EmptyViewProps {
  title: ReactNode;
  description?: ReactNode;
}

const EmptyView = ({ title, description }: EmptyViewProps) => {
  const hasDescription = Boolean(description);

  return (
    <div className={styles.empty}>
      <span className={styles.image} aria-hidden='true' />
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
