import { ReactNode } from 'react';

import * as styles from './card-festival.css';

interface CardFestivalProps {
  mainImageUrl: string;
  title: string;
  startDate: string;
  endDate: string;
  chipMap: Record<string, ReactNode>;
  activeKeys: (string | boolean | undefined | null)[];
  iconSlot?: ReactNode;
  buttonSlot?: ReactNode;
}

export const CardFestival = ({
  mainImageUrl,
  title,
  startDate,
  endDate,
  chipMap,
  activeKeys,
  iconSlot,
  buttonSlot,
}: CardFestivalProps) => {
  const activeChipKeys = activeKeys.filter((key): key is string => !!key);
  return (
    <article className={styles.card}>
      <img src={mainImageUrl} alt={title} className={styles.image} />
      <div className={styles.contentContainer}>
        <div>
          <p className={styles.title}>{title}</p>
          <p className={styles.duration}>
            {startDate} - {endDate}
          </p>
        </div>
        <div className={styles.chip}>
          {activeChipKeys.map((key) =>
            chipMap[key] ? <div key={key}>{chipMap[key]}</div> : null,
          )}
        </div>
      </div>
      {buttonSlot && <div className={styles.buttonSlot}>{buttonSlot}</div>}
      {iconSlot && <div className={styles.iconSlot}>{iconSlot}</div>}
    </article>
  );
};

export default CardFestival;
