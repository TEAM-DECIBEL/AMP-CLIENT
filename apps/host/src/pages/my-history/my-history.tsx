import { useQuery } from '@tanstack/react-query';

import { EmptyView } from '@amp/ads-ui';

import FestivalList from '@widgets/my-history/festival-list';

import { MY_HISTORY_QUERY_OPTIONS } from '@features/my-history/apis/query';

import * as styles from './my-history.css';

const MyHistory = () => {
  const { data: myHistoryData } = useQuery(
    MY_HISTORY_QUERY_OPTIONS.FESTIVALS({ page: 0, size: 20 }),
  );

  if (!myHistoryData || myHistoryData.festivals.length === 0) {
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
        <FestivalList festivals={myHistoryData.festivals} />
      </div>
    </section>
  );
};

export default MyHistory;
