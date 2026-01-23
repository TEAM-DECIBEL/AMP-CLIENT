import { useQuery } from '@tanstack/react-query';

import { EmptyView } from '@amp/ads-ui';
import { Loading } from '@amp/compositions';

import FestivalList from '@widgets/my-events/festival-list';

import { MY_EVENTS_QUERY_OPTIONS } from '@features/my-events/query';
import { MY_PAGE_QUERY_OPTIONS } from '@features/mypage/apis/query';

import * as styles from './my-events.css';

const MyEventsPage = () => {
  const { data: viewedData } = useQuery(
    MY_PAGE_QUERY_OPTIONS.VIEWED_FESTIVALS(),
  );
  const { data, isPending } = useQuery(
    MY_EVENTS_QUERY_OPTIONS.LIST({ page: 0, size: 20 }),
  );

  const festivals = viewedData?.festivals ?? [];

  if (isPending) {
    return <Loading />;
  }

  if (!data || festivals.length === 0) {
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
        <FestivalList festivals={festivals} />
      </div>
    </section>
  );
};

export default MyEventsPage;
