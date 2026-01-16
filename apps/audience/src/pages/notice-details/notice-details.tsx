import { CircleButton, CtaButton } from '@amp/ads-ui';

import { MOCK_DATA } from '@shared/mocks/notice-detail';

import * as styles from './notice-detail.css';

const NoticeDetailsPage = () => {
  return (
    <main className={styles.container}>
      <div className={styles.noticeDetail}>
        <img
          src={MOCK_DATA.imageUrl}
          alt={MOCK_DATA.title}
          className={styles.img}
        />
        <div className={styles.header}>
          <p className={styles.category}>
            주최 공지 {'>'} {MOCK_DATA.category}
          </p>
          <p className={styles.date}>{MOCK_DATA.createdAt}</p>
        </div>
        <div className={styles.contents}>
          <p className={styles.title}>{MOCK_DATA.title}</p>
          <p className={styles.text}>{MOCK_DATA.content}</p>
        </div>
      </div>
      <div className={styles.button}>
        <div className={styles.circleButton}>
          <CircleButton type='share' onClick={() => {}} />
        </div>
        <CtaButton type='icon' onClick={() => {}}>
          저장하기
        </CtaButton>
      </div>
    </main>
  );
};

export default NoticeDetailsPage;
