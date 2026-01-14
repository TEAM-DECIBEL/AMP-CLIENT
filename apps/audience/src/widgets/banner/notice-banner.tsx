import { ReactNode } from 'react';

import * as styles from './notice-banner.css';

interface NoticeBannerProps {
  chip: ReactNode;
  title: string;
  location: string;
  date: string;
  button?: ReactNode;
}

const NoticeBanner = ({
  chip,
  title,
  location,
  date,
  button,
}: NoticeBannerProps) => {
  return (
    <section className={styles.banner}>
      <div className={styles.content}>
        <div>{chip}</div>
        <div className={styles.text}>
          <p className={styles.title}>{title}</p>
          <div className={styles.description}>
            <p>{location}</p>
            <p className={styles.date}>{date}</p>
          </div>
        </div>
      </div>
      <div className={styles.button}>{button && button}</div>
    </section>
  );
};

export default NoticeBanner;
