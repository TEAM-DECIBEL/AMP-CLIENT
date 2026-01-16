import type { ReactNode } from 'react';

import * as styles from './home-festival-empty.css';

interface HomeFestivalEmptyProps {
  image?: ReactNode | null;
  text: string;
}

const HomeFestivalEmpty = ({ image, text }: HomeFestivalEmptyProps) => {
  return (
    <div className={styles.empty}>
      <span className={styles.image}>{image}</span>
      <span className={styles.text}>{text}</span>
    </div>
  );
};

export default HomeFestivalEmpty;
