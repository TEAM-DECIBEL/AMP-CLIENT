import { LocateIcon, WifiIcon } from '@amp/ads-ui/icons';

import * as styles from './card-home.css';

interface CardHomeProps {
  title: string;
  location: string;
  date: string;
  dDay: number;
}

const CardHome = ({ title, location, date, dDay }: CardHomeProps) => {
  return (
    <article className={styles.background}>
      <div className={styles.contentContainer}>
        <div className={styles.titleSection}>
          <WifiIcon className={styles.wifiIcon} />
          <h3 className={styles.title}>{title}</h3>
        </div>
        <div className={styles.descriptionSection}>
          <div className={styles.description}>
            <div className={styles.location}>
              <LocateIcon className={styles.locateIcon} />
              <p>{location}</p>
            </div>
            <p>{date}</p>
          </div>
          <div className={styles.dDay}>
            <p className={styles.dDayText}>D</p>
            <span>-</span>
            <p className={styles.dDayText}>
              {dDay === 0 ? 'Day' : Math.abs(dDay)}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CardHome;
