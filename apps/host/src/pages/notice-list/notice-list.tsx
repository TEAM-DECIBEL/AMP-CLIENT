import { useMemo, useState } from 'react';

import { CircleButton, NoticeBanner, Tabs } from '@amp/ads-ui';
import {
  CATEGORIES,
  CategorySection,
  CategoryType,
  NoticeCardList,
} from '@amp/compositions';

import { FESTIVAL_MOCK, MOCK_DATA } from '@shared/mocks/notice-list';

import * as styles from './notice-list.css';

const NoticeListPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>(
    CATEGORIES[0],
  );

  // TODO: API 연동 (공지 목록 불러오기)

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
        <header className={styles.contentHeader}>
          <nav>
            {/* TODO: 탭바 value에 따른 뷰 조건부 렌더링 */}
            <Tabs defaultValue='notice' variant='notice'>
              <Tabs.List>
                <Tabs.Trigger value='notice'>주최 공지</Tabs.Trigger>
                <Tabs.Trigger value='status'>현장 상황</Tabs.Trigger>
              </Tabs.List>
            </Tabs>
          </nav>
          <CategorySection
            selectedCategory={selectedCategory}
            onSelect={handleChipClick}
          />
        </header>
        <NoticeCardList notices={sortedList} onItemClick={() => {}} />
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
