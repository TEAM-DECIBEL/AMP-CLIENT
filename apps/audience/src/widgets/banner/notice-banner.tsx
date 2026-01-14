import { ReactNode } from 'react';

import * as styles from './notice-banner.css';

interface NoticeBanenrProps {
  chip: ReactNode;
  title: string;
  location: string;
  startDate: string;
  endDate: string;
  button?: ReactNode;
}

const NoticeBanner = ({
  chip,
  title,
  location,
  startDate,
  endDate,
  button,
}: NoticeBanenrProps) => {
  return (
    <section className={styles.banner}>
      <div className={styles.content}>
        <div>{chip}</div>
        <div className={styles.text}>
          <p className={styles.title}>{title}</p>
          <div className={styles.description}>
            <p>{location}</p>
            <p className={styles.date}>
              {startDate === endDate ? startDate : `${startDate} - ${endDate}`}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.button}>{button && button}</div>
    </section>
  );
};

export default NoticeBanner;
