import { EmptyView } from '@amp/ads-ui';

import FestivalList from '@widgets/my-events/festival-list';

import { myEventsData } from '@shared/mocks/my-events-data';

import * as styles from './my-events.css';

const MyEventsPage = () => {
  if (myEventsData.festivals.length === 0) {
    return (
      <section className={styles.page}>
        <div className={styles.empty}>
          <EmptyView title='관람 공연이 없어요!' />
        </div>
      </section>
    );
  }

  return (
    <section className={styles.page}>
      <div className={styles.list}>
        <FestivalList festivals={myEventsData.festivals} />
      </div>
    </section>
  );
};

export default MyEventsPage;
