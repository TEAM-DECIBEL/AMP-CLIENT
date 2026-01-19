import { NoticeBanner, Tabs } from '@amp/ads-ui';
import { LiveButton } from '@amp/ads-ui';

import { LIVE_STATUS_MOCK } from '@shared/mocks/current';
import { FESTIVAL_MOCK } from '@shared/mocks/notice-list';

import * as styles from './current.css';

export type LiveStatusType = '여유' | '보통' | '혼잡';

const STATUS_IMAGES: Record<LiveStatusType, string> = {
  여유: 'https://png.pngtree.com/thumb_back/fh260/background/20210422/pngtree-abstract-decorative-mint-green-background-image_637109.jpg',
  보통: 'https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-3356.jpg?semt=ais_hybrid&w=740&q=80',
  혼잡: 'https://png.pngtree.com/thumb_back/fh260/background/20210207/pngtree-red-solid-color-simple-background-image_556968.jpg',
};

const CurrentPage = () => {
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
            <Tabs variant='notice'>
              <Tabs.List>
                <Tabs.Trigger value='notice'>주최 공지</Tabs.Trigger>
                <Tabs.Trigger value='status'>현장 상황</Tabs.Trigger>
              </Tabs.List>
            </Tabs>
          </nav>
        </header>
        <div className={styles.liveButtonContainer}>
          {LIVE_STATUS_MOCK.map((item) => {
            const statusImageUrl =
              STATUS_IMAGES[item.congestionLevel as LiveStatusType];
            return (
              <LiveButton
                key={item.id}
                title={item.title}
                subText={item.subText ?? ''}
                imageUrl={statusImageUrl}
                onClick={() => {}}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default CurrentPage;
