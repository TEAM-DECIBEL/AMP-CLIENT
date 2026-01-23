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

import * as styles from './notice-list.css';

type NoticeTab = (typeof NOTICE_TAB)[keyof typeof NOTICE_TAB];

const formatDday = (dDay: number) => {
  if (dDay === 0) {
    return 'D-Day';
  }
  return dDay > 0 ? `D-${dDay}` : `D+${Math.abs(dDay)}`;
};

interface ActiveCategory {
  categoryId: number;
  categoryName: string;
  categoryCode: string;
}

interface FestivalBanner {
  festivalId: number;
  title: string;
  location: string;
  period: string;
  isWishlist: boolean;
  dday: number;
  activeCategories: ActiveCategory[];
}

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

  const { data: festivalBanner } = useQuery({
    ...NOTICES_QUERY_OPTIONS.BANNER(eventId),
    select: (res: unknown): FestivalBanner | undefined => {
      if (typeof res !== 'object' || res === null) {
        return undefined;
      }

      if ('data' in res) {
        const wrapped = res as { data?: FestivalBanner };
        return wrapped.data;
      }

      return res as FestivalBanner;
    },
  });

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

  return (
    <main className={styles.pageContainer}>
      {festivalBanner && (
        <NoticeBanner
          dday={formatDday(festivalBanner.dday)}
          title={festivalBanner.title}
          location={festivalBanner.location}
          date={festivalBanner.period}
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
