import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router';

import { CircleButton } from '@amp/ads-ui';
import {
  LiveButtonContainer,
  NOTICE_TAB,
  NoticeBanner,
  NoticeListTab,
  NoticeTabContent,
} from '@amp/compositions';
import { useNoticeList } from '@amp/shared/hooks';

import { CONGESTION_QUERY_OPTIONS } from '@features/notice-details/query';
import { NOTICES_QUERY_OPTIONS } from '@features/notice-list/apis/query';

import { FESTIVAL_MOCK } from '@shared/mocks/notice-list';

import * as styles from './notice-list.css';

type NoticeTab = (typeof NOTICE_TAB)[keyof typeof NOTICE_TAB];

const NoticeListPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<NoticeTab>(NOTICE_TAB.NOTICE);

  const { eventId: eventIdParam } = useParams<{ eventId: string }>();
  const eventId = Number(eventIdParam);

  const { data: noticesData } = useQuery(
    NOTICES_QUERY_OPTIONS.LIST(eventId, { page: 0, size: 20 }),
  );

  const announcements = noticesData?.announcements ?? [];

  const { selectedCategory, noticeList, handleChipClick } =
    useNoticeList(announcements);

  const { data: congestionData } = useQuery(
    CONGESTION_QUERY_OPTIONS.STAGES(eventId, { page: 0, size: 10 }),
  );

  const liveItems =
    congestionData?.stages.map((stage) => ({
      id: stage.stageId,
      title: stage.title,
      location: stage.location,
      congestionLevel: stage.congestionLevel,
    })) ?? [];

  const handleNoticeItemClick = (noticeId: number) => {
    // ✅ 실제 eventId를 넣어야 라우팅이 됩니다
    navigate(`/events/${eventId}/notices/${noticeId}`);
  };

  return (
    <main className={styles.pageContainer}>
      <NoticeBanner
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
            <LiveButtonContainer items={liveItems} isDisabled />
          </section>
        )}
      </div>

      {activeTab === NOTICE_TAB.NOTICE && (
        <div className={styles.buttonContainer}>
          <div className={styles.button}>
            <CircleButton type='write' onClick={() => {}} />
          </div>
        </div>
      )}
    </main>
  );
};

export default NoticeListPage;
