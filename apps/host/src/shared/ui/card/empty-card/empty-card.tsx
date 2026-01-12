import type { ReactNode } from 'react';

import * as styles from './empty-card.css';

interface EmptyCardProps {
  children: ReactNode;
}

const EmptyCard = ({ children }: EmptyCardProps) => {
  return <div className={styles.emptyCard}>{children}</div>;
};

export default EmptyCard;
