import FestivalList from '@widgets/my-events/festival-list';

import { myEventsData } from '@shared/mocks/my-events-data';

import * as styles from './my-events.css';

const MyEventsPage = () => {
  return (
    <section className={styles.page}>
      <div className={styles.list}>
        <FestivalList festivals={myEventsData.festivals} />
      </div>
    </section>
  );
};

export default MyEventsPage;
