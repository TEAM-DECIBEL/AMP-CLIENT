import { LocateIcon, WifiIcon } from '@amp/ads-ui/icons';

import * as styles from './card-home.css';

interface CardHomeProps {
  title: string;
  location: string;
  date: string;
  dday: number;
}

const CardHome = ({ title, location, date, dday }: CardHomeProps) => {
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
          <div className={styles.dday}>
            <p className={styles.ddayText}>D</p>
            <span>-</span>
            <p className={styles.ddayText}>
              {dday === 0 ? 'Day' : Math.abs(dday)}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CardHome;
