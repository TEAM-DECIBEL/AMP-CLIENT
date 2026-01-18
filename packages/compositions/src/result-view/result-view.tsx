import { ReactNode } from 'react';

import * as styles from './result-view.css';

interface ResultViewProps {
  title: string;
  description?: string;
  image: ReactNode;
}

const ResultView = ({ title, description, image }: ResultViewProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        {description && <p className={styles.description}>{description}</p>}
      </div>
      <div className={styles.image}>{image}</div>
    </div>
  );
};

export default ResultView;
