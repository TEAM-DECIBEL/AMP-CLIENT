import { CardNotice, EmptyView } from '@amp/ads-ui';

import { savedNoticesData } from '@shared/mocks/saved-notices-data';

import * as styles from './saved-notices.css';

const SavedNoticesPage = () => {
  if (savedNoticesData.notices.length === 0) {
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
        {savedNoticesData.notices.map((notice, index) => (
          <div key={notice.noticeId}>
            <CardNotice
              imageUrl={notice.imageUrl ?? notice.festival.mainImageUrl}
              title={notice.title}
              content={notice.content}
            />
            {index < savedNoticesData.notices.length - 1 && (
              <div className={styles.divider} aria-hidden='true' />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SavedNoticesPage;
