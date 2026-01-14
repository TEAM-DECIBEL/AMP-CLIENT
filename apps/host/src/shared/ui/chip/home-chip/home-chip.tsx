import type { ReactNode } from 'react';

import * as styles from './home-chip.css';

interface HomeChipProps {
  title: ReactNode;
  count: ReactNode;
}

const HomeChip = ({ title, count }: HomeChipProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <span className={styles.title}>{title}</span>
        <span className={styles.count}>{count}</span>
      </div>
    </div>
  );
};

export default HomeChip;
