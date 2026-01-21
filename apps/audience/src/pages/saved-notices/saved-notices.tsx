import { useQuery } from '@tanstack/react-query';

import { CardNotice, EmptyView } from '@amp/ads-ui';

import { SAVED_NOTICES_QUERY_OPTIONS } from '@features/saved-notice/query';

import * as styles from './saved-notices.css';

const SavedNoticesPage = () => {
  const { data, isError } = useQuery(
    SAVED_NOTICES_QUERY_OPTIONS.LIST({ page: 0, size: 20 }),
  );

  if (isError || !data) {
    return (
      <section className={styles.page}>
        <div className={styles.empty}>
          <EmptyView title='저장한 공지가 없어요' />
        </div>
      </section>
    );
  }

  if (data.notices.length === 0) {
    return (
      <section className={styles.page}>
        <div className={styles.empty}>
          <EmptyView title='저장한 공지가 없어요!' />
        </div>
      </section>
    );
  }

  return (
    <section className={styles.page}>
      <div className={styles.list}>
        {data.notices.map((notice, index) => (
          <div key={notice.noticeId}>
            <CardNotice
              imageUrl={notice.imageUrl ?? notice.imageUrl}
              title={notice.title}
              content={notice.categoryName}
            />
            {index < data.notices.length - 1 && (
              <div className={styles.divider} aria-hidden='true' />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SavedNoticesPage;
