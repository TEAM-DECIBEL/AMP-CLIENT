import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router';

import { ActionButton, CircleButton, toast } from '@amp/ads-ui';
import { CopyIcon } from '@amp/ads-ui/icons';
import { ENV } from '@amp/apis';
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

import { ROUTE_PATH } from '@shared/constants/path';

import * as styles from './notice-list.css';

type NoticeTab = (typeof NOTICE_TAB)[keyof typeof NOTICE_TAB];

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
    navigate(
      ROUTE_PATH.NOTICE_DETAILS.replace(':eventId', String(eventId)).replace(
        ':noticeId',
        String(noticeId),
      ),
    );
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(
        `${ENV.AUDIENCE_BASE_URL}/events/${eventId}/notices`,
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
          dDay={formatDday(festivalBanner.dDay)}
          title={festivalBanner.title}
          location={festivalBanner.location}
          date={festivalBanner.period}
          button={
            <ActionButton
              onChange={handleCopyLink}
              emphasized
            >
              <CopyIcon className={styles.copyIcon} />
              관람 예정
            </ActionButton>
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
              onClick={() =>
                navigate(
                  ROUTE_PATH.NOTICE_CREATE.replace(':eventId', String(eventId)),
                )
              }
            />
          </div>
        </div>
      )}
    </main>
  );
};

export default NoticeListPage;
