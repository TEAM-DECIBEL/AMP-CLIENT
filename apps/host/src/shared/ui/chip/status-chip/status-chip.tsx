import type { ReactNode } from 'react';

import * as styles from './status-chip.css';

interface StatusChipProps {
  title: ReactNode;
  count: ReactNode;
}

const StatusChip = ({ title, count }: StatusChipProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <span className={styles.title}>{title}</span>
        <span className={styles.count}>{count}</span>
      </div>
    </div>
  );
};

export default StatusChip;
