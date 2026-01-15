import { ReactNode } from 'react';

import { Chip } from '@amp/ads-ui';

import * as styles from './notice-banner.css';

interface NoticeBannerProps {
  title: string;
  location: string;
  date: string;
  dday: string;
  button?: ReactNode;
}

const NoticeBanner = ({
  title,
  location,
  date,
  dday,
  button,
}: NoticeBannerProps) => {
  return (
    <section className={styles.banner}>
      <div className={styles.content}>
        <Chip variant='day' status='color' className={styles.chip}>
          {dday}
        </Chip>

        <div className={styles.text}>
          <h3 className={styles.title}>{title}</h3>
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
