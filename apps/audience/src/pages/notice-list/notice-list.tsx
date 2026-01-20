import { useState } from 'react';
import { overlay } from 'overlay-kit';

import {
  AddToWatchButton,
  CircleButton,
  CtaButton,
  Modal,
  NoticeBanner,
  RectButton,
  StatusSheet,
  Tabs,
  toast,
} from '@amp/ads-ui';
import { AlertIcon, ChatIcon } from '@amp/ads-ui/icons';
import {
  CategorySection,
  LiveButtonContainer,
  NoticeCardList,
} from '@amp/compositions';

import { useLiveStatus } from '@shared/hooks/use-live-status';
import { useNoticeAlert } from '@shared/hooks/use-notice-alert';
import { useNoticeList } from '@shared/hooks/use-notice-list';
import { FESTIVAL_MOCK } from '@shared/mocks/notice-list';

import * as styles from './notice-list.css';

const NoticeListPage = () => {
  const [activeTab, setActiveTab] = useState<string>('notice');

  // TODO: 서버에서 받아온 값으로 기본값 설정
  const [isWatched, setIsWatched] = useState<boolean>(false);

  const { toggleAlert } = useNoticeAlert();

  const { selectedCategory, noticeList, handleChipClick } = useNoticeList();
  const {
    statusItems,
    isSheetOpen,
    sheetTitle,
    status,
    isAvailableTime,
    openSheet,
    closeSheet,
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
          {/* TODO: 탭바 value에 따른 뷰 조건부 렌더링 */}
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
            {!(selectedCategory === '전체') && (
              <div className={styles.ctaButtonContainer}>
                <CtaButton
                  type='icon'
                  color='gray'
                  onClick={handleAlertClick}
                  className={styles.ctaButton}
                >
                  <AlertIcon />
                  {selectedCategory} 공지 알림 받기
                </CtaButton>
              </div>
            )}
            <NoticeCardList notices={noticeList} onItemClick={() => {}} />
          </div>
        ) : (
          <div className={styles.noticeContainer}>
            <div className={styles.noticeChip}>
              <ChatIcon />
              <p>지금 계신 곳의 혼잡도 상황을 알려주세요!</p>
            </div>
            <LiveButtonContainer items={statusItems} onClick={openSheet} />
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

      {isAvailableTime ? (
        <StatusSheet
          open={isSheetOpen}
          onClose={closeSheet}
          selectable
          title={sheetTitle}
          selected={status}
          onConfirm={confirmStatus}
        />
      ) : (
        <StatusSheet
          open={isSheetOpen}
          selectable={false}
          onClose={closeSheet}
        />
      )}
    </main>
  );
};

export default NoticeListPage;
