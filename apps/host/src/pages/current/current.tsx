import { NoticeBanner, Tabs } from '@amp/ads-ui';
import { LiveButtonContainer } from '@amp/compositions';

import { LIVE_STATUS_MOCK } from '@shared/mocks/current';
import { FESTIVAL_MOCK } from '@shared/mocks/notice-list';

import * as styles from './current.css';

const CurrentPage = () => {
  return (
    <main className={styles.pageContainer}>
      <NoticeBanner
        // TODO: 관련 공연 정보 데이터 불러와서 Props 전달
        dday={FESTIVAL_MOCK.dday}
        title={FESTIVAL_MOCK.title}
        location={FESTIVAL_MOCK.location}
        date={FESTIVAL_MOCK.date}
      />
      <div className={styles.mainContent}>
        <header className={styles.contentHeader}>
          <nav>
            {/* TODO: 탭바 value에 따른 뷰 조건부 렌더링 */}
            <Tabs variant='notice'>
              <Tabs.List>
                <Tabs.Trigger value='notice'>주최 공지</Tabs.Trigger>
                <Tabs.Trigger value='status'>현장 상황</Tabs.Trigger>
              </Tabs.List>
            </Tabs>
          </nav>
        </header>
        <LiveButtonContainer items={LIVE_STATUS_MOCK} />
      </div>
    </main>
  );
};

export default CurrentPage;
