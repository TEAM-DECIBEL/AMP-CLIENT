import { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { overlay } from 'overlay-kit';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router';

import { AddToWatchButton, Modal, RectButton, toast } from '@amp/ads-ui';
import { ChatIcon } from '@amp/ads-ui/icons';
import {
  LiveButtonContainer,
  NOTICE_TAB,
  NoticeBanner,
  NoticeListTab,
  NoticeTabContent,
} from '@amp/compositions';
import { useNoticeList } from '@amp/shared/hooks';

import { putWishList } from '@features/home/apis/query';
import { NOTICES_QUERY_OPTIONS } from '@features/notice-list/apis/query';

import { CATEGORY_CODE_BY_LABEL } from '@shared/constants/category-label';
import { useNotificationsSubscribeMutation } from '@shared/hooks/use-festival-notification';
import { useLiveStatus } from '@shared/hooks/use-live-status';
import formatDday from '@shared/libs/format-dday';
import { FESTIVAL_MOCK } from '@shared/mocks/notice-list';
import LiveStatusSheet from '@shared/ui/live-status-sheet/live-status-sheet';

import { enablePushAndGetToken } from '../../push';

import * as styles from './notice-list.css';

type NoticeTab = (typeof NOTICE_TAB)[keyof typeof NOTICE_TAB];

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

  const [isWatched, setIsWatched] = useState(false);

  const { eventId } = useParams<{ eventId: string }>();
  const festivalId = Number(eventId);

  const { data } = useQuery(
    NOTICES_QUERY_OPTIONS.LIST(festivalId, {
      page: 0,
      size: 20,
    }),
  );

  const { data: bannerData } = useQuery({
    ...NOTICES_QUERY_OPTIONS.BANNER(festivalId),
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

  const { mutate } = useNotificationsSubscribeMutation();
  const wishListMutation = useMutation({
    mutationFn: ({
      festivalId,
      wishList,
    }: {
      festivalId: number;
      wishList: boolean;
    }) => putWishList(festivalId, { wishList }),
  });

  const announcements = data?.announcements ?? [];

  const activeCategoryNames =
    bannerData?.activeCategories?.map((c) => c.categoryName) ?? [];

  const { categories, selectedCategory, noticeList, handleChipClick } =
    useNoticeList(announcements, activeCategoryNames);

  const handleNoticeItemClick = (noticeId: number) => {
    navigate(`/events/${festivalId}/notices/${noticeId}`);
  };

  const {
    statusItems,
    isSheetOpen,
    sheetTitle,
    status,
    isAvailableTime,
    openStatusSheet,
    closeStatusSheet,
    confirmStatus,
  } = useLiveStatus();

  const isCategoryLabel = (
    value: string,
  ): value is keyof typeof CATEGORY_CODE_BY_LABEL =>
    value in CATEGORY_CODE_BY_LABEL;

  const categoryCode = isCategoryLabel(selectedCategory)
    ? CATEGORY_CODE_BY_LABEL[selectedCategory]
    : 'OTHERS';

  const handleWatchToggle = () => {
    if (!Number.isFinite(festivalId)) {
      toast.show('공연 정보를 불러오지 못했어요.');
      return;
    }

    if (wishListMutation.isPending) {
      return;
    }
    const nextSelected = !isWatched;
    const prevSelected = isWatched;

    setIsWatched(nextSelected);
    wishListMutation.mutate(
      { festivalId, wishList: nextSelected },
      {
        onError: () => {
          setIsWatched(prevSelected);
          toast.show('관람 예정 설정에 실패했어요.');
        },
      },
    );
  };

  useEffect(() => {
    if (bannerData) {
      setIsWatched(bannerData.isWishlist);
    }
  }, [bannerData]);

  const bannerProps = bannerData
    ? {
        dday: formatDday(bannerData.dday),
        title: bannerData.title,
        location: bannerData.location,
        date: bannerData.period,
      }
    : {
        dday: FESTIVAL_MOCK.dday,
        title: FESTIVAL_MOCK.title,
        location: FESTIVAL_MOCK.location,
        date: FESTIVAL_MOCK.date,
      };

  const handleAlertClick = () => {
    overlay.open(({ isOpen, close, unmount }) => {
      const handleConfirmAlert = async () => {
        try {
          const token = await enablePushAndGetToken();
          if (!token) {
            toast.show('토큰 발급에 실패했어요.');
            return;
          }

          const body = { fcmToken: token };

          mutate(
            { festivalId, categoryCode, body },
            {
              onSuccess: () => {
                toast.show(
                  `${selectedCategory} 공지 알림이 설정되었어요.`,
                  '새 공지가 올라오면 알림을 보내드릴게요.',
                );
                close();
                unmount();
              },
              onError: () => {
                toast.show('이미 알림을 받고 있어요!');
                close();
                unmount();
              },
            },
          );
        } catch {
          toast.show('알림 권한 설정/토큰 발급 중 오류가 발생했어요.');
        }
      };

      return (
        <Modal
          open={isOpen}
          onClose={() => {
            close();
            unmount();
          }}
        >
          <Modal.Panel>
            <Modal.Content>
              <Modal.Title>공지 알림을 받으시겠어요?</Modal.Title>
              <Modal.Description>
                {selectedCategory} 공지가 새로 올라오면 알려드려요.
              </Modal.Description>
            </Modal.Content>

            <Modal.Actions>
              <RectButton
                variant='secondary'
                onClick={() => {
                  close();
                  unmount();
                }}
              >
                취소
              </RectButton>
              <RectButton variant='primary' onClick={handleConfirmAlert}>
                알림 받기
              </RectButton>
            </Modal.Actions>
          </Modal.Panel>
        </Modal>
      );
    });
  };

  return (
    <main className={styles.pageContainer}>
      <NoticeBanner
        dday={bannerProps.dday}
        title={bannerProps.title}
        location={bannerProps.location}
        date={bannerProps.date}
        button={
          <AddToWatchButton selected={isWatched} onChange={handleWatchToggle} />
        }
      />
      <div className={styles.mainContent}>
        <nav className={styles.contentHeader}>
          <NoticeListTab onChange={setActiveTab} />
        </nav>
        {activeTab === NOTICE_TAB.NOTICE ? (
          <NoticeTabContent
            categories={categories}
            selectedCategory={selectedCategory}
            noticeList={noticeList}
            isSelectedCategory={true}
            onSelectCategory={handleChipClick}
            onAlertClick={handleAlertClick}
            onNoticeItemClick={handleNoticeItemClick}
          />
        ) : (
          <div className={styles.noticeContainer}>
            <div className={styles.noticeChip}>
              <ChatIcon />
              <p>지금 계신 곳의 혼잡도 상황을 알려주세요!</p>
            </div>
            <LiveButtonContainer
              items={statusItems}
              showIcon={true}
              onClick={openStatusSheet}
            />
          </div>
        )}
      </div>

      <LiveStatusSheet
        open={isSheetOpen}
        onClose={closeStatusSheet}
        isAvailableTime={isAvailableTime}
        title={sheetTitle}
        selected={status}
        onConfirm={confirmStatus}
      />
    </main>
  );
};

export default NoticeListPage;
