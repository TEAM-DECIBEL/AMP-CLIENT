import type { ReactNode } from 'react';

import { Chip } from '@amp/ads-ui';

import * as styles from './notice-banner.css';

interface NoticeBannerProps {
  title: string;
  location: string;
  date: string;
  dDay: string;
  button?: ReactNode;
}

const NoticeBanner = ({
  title,
  location,
  date,
  dDay,
  button,
}: NoticeBannerProps) => {
  return (
    <section className={styles.banner}>
      <div className={styles.content}>
        <Chip variant='day' status='color' className={styles.chip}>
          {dDay}
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
