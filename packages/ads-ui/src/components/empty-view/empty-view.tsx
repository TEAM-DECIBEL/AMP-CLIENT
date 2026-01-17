import type { ReactNode } from 'react';

import * as styles from './empty-view.css';

interface EmptyViewProps {
  image: ReactNode | null;
  text: ReactNode;
}

const EmptyView = ({ image, text }: EmptyViewProps) => {
  return (
    <div className={styles.empty}>
      <span className={styles.image}>{image}</span>
      <span className={styles.text}>{text}</span>
    </div>
  );
};

export default EmptyView;
