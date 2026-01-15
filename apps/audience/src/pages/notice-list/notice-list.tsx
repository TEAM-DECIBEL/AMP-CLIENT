import { useMemo, useState } from 'react';

import { NoticeBanner } from '@amp/ads-ui';
import { Tabs } from '@amp/ads-ui';
import { CategoryButton } from '@amp/ads-ui';
import { CardNotice } from '@amp/ads-ui';
import { CircleButton } from '@amp/ads-ui';
import { AddToWatchButton } from '@amp/ads-ui';
import { CtaButton } from '@amp/ads-ui';

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

  // TODO: 서버에서 받아온 값으로 기본값 설정
  const [isWatched, setIsWatched] = useState<boolean>(false);

  // TODO: API 연동 (공지 목록 불러오기)

  const sortedList = useMemo(() => {
    const filtered =
      selectedCategory === '전체'
        ? MOCK_DATA
        : MOCK_DATA.filter((item) => item.categoryName === selectedCategory);

    return filtered.sort((a, b) => {
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

  return (
    <div className={styles.pageContainer}>
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
      <main className={styles.mainContainer}>
        <div className={styles.header}>
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
          <div className={styles.ctaButton}>
            <CtaButton type='alert' onClick={() => {}}>
              퇴근길 공지 알림 받기
            </CtaButton>
          </div>
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
      </main>
      <div className={styles.buttonContainer}>
        <div className={styles.button}>
          {/* TODO: 뷰 이동 로직 추가 */}
          <CircleButton type='write' onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default NoticeListPage;
