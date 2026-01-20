import type { ReactNode } from 'react';

import * as styles from './result-view.css';

interface ResultViewProps {
  title: string;
  description?: string;
  image: ReactNode;
}

const ResultView = ({ title, description, image }: ResultViewProps) => {
  return (
    <section className={styles.container}>
      <header className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        {description && <p className={styles.description}>{description}</p>}
      </header>
      {image}
    </section>
  );
};

export default ResultView;
