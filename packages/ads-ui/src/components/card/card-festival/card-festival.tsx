import { ReactNode } from 'react';

import * as styles from './card-festival.css';

interface CardFestivalProps {
  mainImageUrl: string;
  title: string;
  chip: ReactNode;
  startDate: string;
  endDate: string;
  iconSlot?: ReactNode;
  buttonSlot?: ReactNode;
}

export const CardFestival = ({
  mainImageUrl,
  title,
  chip,
  startDate,
  endDate,
  iconSlot,
  buttonSlot,
}: CardFestivalProps) => {
  return (
    <article className={styles.card}>
      <img src={mainImageUrl} alt={title} className={styles.image} />
      <div className={styles.contentContainer}>
        <p className={styles.title}>{title}</p>
        <p className={styles.duration}>
          {startDate} - {endDate}
        </p>
        <div className={styles.chip}>{chip}</div>
      </div>
      {buttonSlot && <div className={styles.buttonSlot}>{buttonSlot}</div>}
      {iconSlot && <div className={styles.iconSlot}>{iconSlot}</div>}
    </article>
  );
};
