import { NoticeBanner } from '@amp/ads-ui';
import { Tabs } from '@amp/ads-ui';

import * as styles from './notice-list.css';

const NoticeListPage = () => {
  return (
    <div>
      <div className={styles.bannerContainer}>
        <NoticeBanner
          dday={'D-5'}
          title={'Grand Mint Festival'}
          location={'여의도공원'}
          date={'2025-10-15'}
        />
        <div className={styles.tabBar}>
          <Tabs defaultValue='notice' variant='notice'>
            <Tabs.List>
              <Tabs.Trigger value='notice'>주최 공지</Tabs.Trigger>
              <Tabs.Trigger value='status'>현장 상황</Tabs.Trigger>
            </Tabs.List>
          </Tabs>
        </div>
      </div>
      <main>
        <div className={styles.chipSection}></div>
      </main>
    </div>
  );
};

export default NoticeListPage;
