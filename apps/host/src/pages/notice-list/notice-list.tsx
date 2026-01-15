import { useState } from 'react';

import { NoticeBanner } from '@amp/ads-ui';
import { Tabs } from '@amp/ads-ui';
import { CategoryButton } from '@amp/ads-ui';
import { CardNotice } from '@amp/ads-ui';

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

const NoticeListPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    CATEGORIES[0],
  );

  const filteredNotices =
    selectedCategory === '전체'
      ? ANNOUNCEMENTS
      : ANNOUNCEMENTS.filter((item) => item.categoryName === selectedCategory);

  const sortedList = [...filteredNotices].sort((a, b) => {
    if (a.isPinned && !b.isPinned) {
      return -1;
    }
    if (!a.isPinned && b.isPinned) {
      return 1;
    }

    return 0;
  });

  const handleChipClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <div className={styles.bannerContainer}>
        <NoticeBanner
          dday={'D-5'}
          title={'Grand Mint Festival'}
          location={'여의도공원 일대'}
          date={'2025.10.15 - 2025.10.18'}
        />
        <div className={styles.tabBar}>
          <Tabs defaultValue='notice' variant='notice'>
            <Tabs.List>
              <Tabs.Trigger value='notice'>주최 공지</Tabs.Trigger>
              <Tabs.Trigger value='status'>현장 상황</Tabs.Trigger>
            </Tabs.List>
          </Tabs>
        </div>
      </div>
      <main>
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
        <div className={styles.cardList}>
          {sortedList.length === 0 ? (
            <div>등록된 공지사항이 없습니다.</div>
          ) : (
            sortedList.map((notice) => (
              <div key={notice.announcementId} className={styles.card}>
                <CardNotice
                  key={notice.announcementId}
                  imageUrl={notice.imageUrl}
                  title={notice.title}
                  content={notice.content}
                  isPinned={notice.isPinned}
                  createdAt={notice.createdAt}
                />
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
};

export default NoticeListPage;
