import { WifiIcon } from '@amp/ads-ui/icons';
import { LocateIcon } from '@amp/ads-ui/icons';

import fixedBgImage from '@shared/assets/home/card_home.webp';

import * as styles from './card-home.css';

interface CardHomeProps {
  title: string;
  location: string;
  startDate: string;
  endDate: string;
  dday: number;
}

const CardHome = ({
  title,
  location,
  startDate,
  endDate,
  dday,
}: CardHomeProps) => {
  return (
    <article
      className={styles.background}
      style={{ backgroundImage: `url(${fixedBgImage})` }}
      aria-label='CardHome Cover Image'
    >
      <div className={styles.contentContainer}>
        <div className={styles.titleSection}>
          <WifiIcon className={styles.wifiIcon} />
          <p>{title}</p>
        </div>
        <div className={styles.descriptionSection}>
          <div className={styles.description}>
            <div className={styles.location}>
              <LocateIcon className={styles.locateIcon} />
              <p>{location}</p>
            </div>
            <p>
              {startDate === endDate ? startDate : `${startDate} - ${endDate}`}
            </p>
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
