import { useMemo, useState } from 'react';
import { overlay } from 'overlay-kit';

import {
  AddToWatchButton,
  CardNotice,
  CategoryButton,
  CircleButton,
  CtaButton,
  Modal,
  NoticeBanner,
  RectButton,
  Tabs,
  toast,
} from '@amp/ads-ui';

import { FESTIVAL_MOCK, MOCK_DATA } from '@shared/mocks/notice-list';

import * as styles from './notice-list.css';

const CATEGORIES = [
  '전체',
  '운영 시간',
  '입장 안내',
  'MD',
  '이벤트',
  '퇴근길',
  '기타',
] as const;

type CategoryType = (typeof CATEGORIES)[number];

const NoticeListPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>(
    CATEGORIES[0],
  );

  // TODO: 임시 state, 추후 api 호출 결과 기준으로 토스트 메시지 결정
  const [isAlertOn, setIsAlertOn] = useState(false);

  // TODO: 서버에서 받아온 값으로 기본값 설정
  const [isWatched, setIsWatched] = useState<boolean>(false);

  // TODO: API 연동 (공지 목록 불러와서 아래 MOCK_DATA 대체)

  const sortedList = useMemo(() => {
    const filtered =
      selectedCategory === '전체'
        ? MOCK_DATA
        : MOCK_DATA.filter((item) => item.categoryName === selectedCategory);

    return [...filtered].sort((a, b) => {
      if (a.isPinned !== b.isPinned) {
        return a.isPinned ? -1 : 1;
      }
      return 0;
    });
  }, [selectedCategory]);

  const handleChipClick = (category: CategoryType) => {
    setSelectedCategory(category);
  };

  const handleWatchToggle = () => {
    setIsWatched((prev) => !prev);
    // TODO: 서버에 '관심 공연 등록/해제' API 요청 보내기
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
              // TODO: 알림 신청 API 호출, 그 결과 기준 토스트 메시지 출력
              onClick={() => {
                const nextState = !isAlertOn;
                setIsAlertOn(nextState);

                if (nextState) {
                  toast.show(
                    `${selectedCategory} 공지 알림이 설정되었어요.`,
                    `새 공지가 올라오면 알림을 보내드릴게요.`,
                  );
                } else {
                  toast.show('이미 알림을 받고 있어요!');
                }

                close();
                unmount();
              }}
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
        <div className={styles.contentHeader}>
          <div className={styles.tabBar}>
            {/* TODO: 탭바 value에 따른 뷰 조건부 렌더링 */}
            <Tabs defaultValue='notice' variant='notice'>
              <Tabs.List>
                <Tabs.Trigger value='notice'>주최 공지</Tabs.Trigger>
                <Tabs.Trigger value='status'>현장 상황</Tabs.Trigger>
              </Tabs.List>
            </Tabs>
          </div>
          <div className={styles.chipSection}>
            {CATEGORIES.map((category) => (
              <CategoryButton
                key={category}
                variant='primary'
                selected={selectedCategory === category}
                onChange={() => handleChipClick(category)}
              >
                {category}
              </CategoryButton>
            ))}
          </div>
          {!(selectedCategory === '전체') && (
            <div className={styles.ctaButton}>
              <CtaButton type='alert' onClick={handleAlertClick}>
                {selectedCategory} 공지 알림 받기
              </CtaButton>
            </div>
          )}
        </div>
        <div className={styles.cardList}>
          {sortedList.length === 0 ? (
            <div className={styles.emptyContainer}>
              <div className={styles.emptyText}>
                <img src='' alt='작성된 공지 없음' />
                <p>작성된 공지가 없어요.</p>
              </div>
            </div>
          ) : (
            sortedList.map((notice) => (
              <div key={notice.announcementId} className={styles.card}>
                <CardNotice
                  imageUrl={notice.imageUrl}
                  title={notice.title}
                  content={notice.content}
                  isPinned={notice.isPinned}
                  createdAt={notice.createdAt}
                  // TODO: 뷰 이동 로직 추가
                  onClick={() => {}}
                />
              </div>
            ))
          )}
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <div className={styles.button}>
          {/* TODO: 뷰 이동 로직 추가 */}
          <CircleButton type='write' onClick={() => {}} />
        </div>
      </div>
    </main>
  );
};

export default NoticeListPage;
