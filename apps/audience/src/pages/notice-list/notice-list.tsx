import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
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

import { NOTICES_QUERY_OPTIONS } from '@features/notice-list/apis/query';

import { useLiveStatus } from '@shared/hooks/use-live-status';
import { useNoticeAlert } from '@shared/hooks/use-notice-alert';
import { FESTIVAL_MOCK } from '@shared/mocks/notice-list';
import LiveStatusSheet from '@shared/ui/live-status-sheet/live-status-sheet';

import * as styles from './notice-list.css';

type NoticeTab = (typeof NOTICE_TAB)[keyof typeof NOTICE_TAB];

const NoticeListPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<NoticeTab>(NOTICE_TAB.NOTICE);

  // TODO: 서버에서 받아온 값으로 기본값 설정
  const [isWatched, setIsWatched] = useState(false);

  const { toggleAlert } = useNoticeAlert();

  const { eventId } = useParams<{ eventId: string }>();

  const { data } = useQuery(
    NOTICES_QUERY_OPTIONS.LIST(Number(eventId), {
      page: 0,
      size: 20,
    }),
  );

  const announcements = data?.announcements ?? [];

  const { selectedCategory, noticeList, handleChipClick } =
    useNoticeList(announcements);

  const handleNoticeItemClick = (noticeId: number) => {
    navigate(`/events/:eventId/notices/${noticeId}`);
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

  const handleWatchToggle = () => {
    setIsWatched((prev) => !prev);
    // TODO: 서버에 '관심 공연 등록/해제' API 요청 보내기
  };

  const handleConfirmAlert = async (close: () => void, unmount: () => void) => {
    const isNowOn = await toggleAlert();

    if (isNowOn) {
      toast.show(
        `${selectedCategory} 공지 알림이 설정되었어요.`,
        `새 공지가 올라오면 알림을 보내드릴게요.`,
      );
    } else {
      toast.show('알림 설정이 해제되었어요.');
    }

    close();
    unmount();
  };

  const handleAlertClick = () => {
    overlay.open(({ isOpen, close, unmount }) => (
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
            <RectButton
              variant='primary'
              onClick={() => handleConfirmAlert(close, unmount)}
            >
              알림 받기
            </RectButton>
          </Modal.Actions>
        </Modal.Panel>
      </Modal>
    ));
  };

  return (
    <main className={styles.pageContainer}>
      <NoticeBanner
        // TODO: 관련 공연 정보 데이터 불러와서 Props 전달
        dday={FESTIVAL_MOCK.dday}
        title={FESTIVAL_MOCK.title}
        location={FESTIVAL_MOCK.location}
        date={FESTIVAL_MOCK.date}
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
