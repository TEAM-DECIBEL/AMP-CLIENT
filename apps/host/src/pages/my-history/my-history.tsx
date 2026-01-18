import { EmptyView } from '@amp/ads-ui';

import FestivalList from '@widgets/my-history/festival-list';

import { myHistoryFestivals } from '@shared/mocks/my-history-data';

import * as styles from './my-history.css';

const MyHistory = () => {
  if (myHistoryFestivals.length === 0) {
    return (
      <section className={styles.page}>
        <div className={styles.empty}>
          <EmptyView title='진행한 공연이 없어요!' />
        </div>
      </section>
    );
  }

  return (
    <section className={styles.page}>
      <div className={styles.list}>
        <FestivalList festivals={myHistoryFestivals} />
      </div>
    </section>
  );
};

export default MyHistory;
