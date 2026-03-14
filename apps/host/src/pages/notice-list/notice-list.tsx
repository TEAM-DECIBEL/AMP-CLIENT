import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router';

import { AddToWatchButton, CircleButton, toast } from '@amp/ads-ui';
import { CopyIcon } from '@amp/ads-ui/icons';
import {
  LiveButtonContainer,
  NOTICE_TAB,
  NoticeBanner,
  NoticeListTab,
  NoticeTabContent,
} from '@amp/compositions';
import { useNoticeList } from '@amp/shared/hooks';
import { formatDday } from '@amp/shared/utils';

import { CONGESTION_QUERY_OPTIONS } from '@features/notice-details/query';
import { NOTICES_QUERY_OPTIONS } from '@features/notice-list/apis/query';

import * as styles from './notice-list.css';

type NoticeTab = (typeof NOTICE_TAB)[keyof typeof NOTICE_TAB];
const AUDIENCE_BASE_URL =
  import.meta.env.VITE_AUDIENCE_BASE_URL || 'https://ampnotice.kr';

const NoticeListPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<NoticeTab>(NOTICE_TAB.NOTICE);
  const { eventId: eventIdParam } = useParams<{ eventId: string }>();
  const eventId = Number(eventIdParam);

  const { data: noticesData } = useQuery(
    NOTICES_QUERY_OPTIONS.LIST(eventId, {
      page: 0,
      size: 20,
    }),
  );

  const { data: festivalBanner } = useQuery(
    NOTICES_QUERY_OPTIONS.BANNER(eventId),
  );

  const announcements = noticesData?.announcements ?? [];

  const activeCategoryNames =
    festivalBanner?.activeCategories?.map((c) => c.categoryName) ?? [];

  const { categories, selectedCategory, noticeList, handleChipClick } =
    useNoticeList(announcements, activeCategoryNames);

  const { data: congestionData } = useQuery(
    CONGESTION_QUERY_OPTIONS.STAGES(eventId, { page: 0, size: 10 }),
  );

  const liveItems =
    congestionData?.stages.map((stage) => ({
      stageId: stage.stageId,
      title: stage.title,
      location: stage.location,
      congestionLevel: stage.congestionLevel,
    })) ?? [];

  const handleNoticeItemClick = (noticeId: number) => {
    navigate(`/events/${eventId}/notices/${noticeId}`);
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(
        `${AUDIENCE_BASE_URL}/events/${eventId}/notices`,
      );
      toast.show('링크가 복사되었어요.');
    } catch {
      toast.show('링크 복사에 실패했어요.', '다시 시도해 주세요.');
    }
  };

  return (
    <main className={styles.pageContainer}>
      {festivalBanner && (
        <NoticeBanner
          dday={formatDday(festivalBanner.dday)}
          title={festivalBanner.title}
          location={festivalBanner.location}
          date={festivalBanner.period}
          button={
            <AddToWatchButton
              onChange={handleCopyLink}
              icon={<CopyIcon />}
              emphasized
            >
              링크 복사
            </AddToWatchButton>
          }
        />
      )}
      <div className={styles.mainContent}>
        <nav className={styles.contentHeader}>
          <NoticeListTab onChange={setActiveTab} />
        </nav>

        {activeTab === NOTICE_TAB.NOTICE ? (
          <NoticeTabContent
            categories={categories}
            selectedCategory={selectedCategory}
            noticeList={noticeList}
            onSelectCategory={handleChipClick}
            onNoticeItemClick={handleNoticeItemClick}
            emptyTitle='작성한 공지가 없어요.'
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
            <CircleButton
              type='write'
              onClick={() => navigate(`/events/${eventId}/notices/new`)}
            />
          </div>
        </div>
      )}
    </main>
  );
};

export default NoticeListPage;
