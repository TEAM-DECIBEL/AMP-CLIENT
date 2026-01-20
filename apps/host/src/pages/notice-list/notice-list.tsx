import { useState } from 'react';

import { CircleButton } from '@amp/ads-ui';
import {
  LiveButtonContainer,
  NOTICE_TAB,
  NoticeBanner,
  NoticeListTab,
  NoticeTabContent,
} from '@amp/compositions';
import { useNoticeList } from '@amp/shared/hooks';

import { LIVE_STATUS_MOCK } from '@shared/mocks/current';
import { FESTIVAL_MOCK } from '@shared/mocks/notice-list';

import * as styles from './notice-list.css';

type NoticeTab = (typeof NOTICE_TAB)[keyof typeof NOTICE_TAB];

const NoticeListPage = () => {
  const [activeTab, setActiveTab] = useState<NoticeTab>(NOTICE_TAB.NOTICE);

  const { selectedCategory, noticeList, handleChipClick } = useNoticeList();

  // TODO: API 연동 (공지 목록 불러오기)

  const handleNoticeItemClick = (id: number) => {
    // TODO: 공지 상세 페이지 이동 등 로직 추가
  };

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
          <NoticeListTab onChange={setActiveTab} />
        </nav>

        {activeTab === NOTICE_TAB.NOTICE ? (
          <NoticeTabContent
            selectedCategory={selectedCategory}
            noticeList={noticeList}
            onSelectCategory={handleChipClick}
            onNoticeItemClick={handleNoticeItemClick}
          />
        ) : (
          <section className={styles.currentContainer}>
            <LiveButtonContainer items={LIVE_STATUS_MOCK} isDisabled={true} />
          </section>
        )}
      </div>
      {activeTab === NOTICE_TAB.NOTICE && (
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
