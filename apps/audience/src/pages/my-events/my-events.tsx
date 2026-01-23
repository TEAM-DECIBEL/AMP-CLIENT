import { useQuery } from '@tanstack/react-query';

import { EmptyView } from '@amp/ads-ui';
import { Loading } from '@amp/compositions';

import FestivalList from '@widgets/my-events/festival-list';

import { MY_EVENTS_QUERY_OPTIONS } from '@features/my-events/query';

import * as styles from './my-events.css';

const MyEventsPage = () => {
  const { data, isPending } = useQuery(
    MY_EVENTS_QUERY_OPTIONS.LIST({ page: 0, size: 20 }),
  );

  if (isPending) {
    return <Loading />;
  }

  if (!data || data.festivals.length === 0) {
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
        <FestivalList festivals={data.festivals} />
      </div>
    </section>
  );
};

export default MyEventsPage;
