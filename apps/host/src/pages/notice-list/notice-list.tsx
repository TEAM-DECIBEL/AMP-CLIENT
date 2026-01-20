import { useState } from 'react';

import { CircleButton, NoticeBanner, Tabs } from '@amp/ads-ui';
import {
  CategorySection,
  LiveButtonContainer,
  NoticeCardList,
} from '@amp/compositions';
import { useNoticeList } from '@amp/shared/hooks';

import { LIVE_STATUS_MOCK } from '@shared/mocks/current';
import { FESTIVAL_MOCK } from '@shared/mocks/notice-list';

import * as styles from './notice-list.css';

const NoticeListPage = () => {
  const [activeTab, setActiveTab] = useState<string>('notice');

  const { selectedCategory, noticeList, handleChipClick } = useNoticeList();

  // TODO: API 연동 (공지 목록 불러오기)

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
        <nav className={styles.contentHeader}>
          <Tabs
            defaultValue='notice'
            variant='notice'
            onValueChange={(value) => setActiveTab(value)}
          >
            <Tabs.List>
              <Tabs.Trigger value='notice'>주최 공지</Tabs.Trigger>
              <Tabs.Trigger value='status'>현장 상황</Tabs.Trigger>
            </Tabs.List>
          </Tabs>
        </nav>

        {activeTab === 'notice' ? (
          <div>
            <CategorySection
              selectedCategory={selectedCategory}
              onSelect={handleChipClick}
            />
            <NoticeCardList notices={noticeList} onItemClick={() => {}} />
          </div>
        ) : (
          <div className={styles.currentContainer}>
            <LiveButtonContainer items={LIVE_STATUS_MOCK} />
          </div>
        )}
      </div>
      {activeTab === 'notice' && (
        <div className={styles.buttonContainer}>
          <div className={styles.button}>
            {/* TODO: 뷰 이동 로직 추가 */}
            <CircleButton type='write' onClick={() => {}} />
          </div>
        </div>
      )}
    </main>
  );
};

export default NoticeListPage;
