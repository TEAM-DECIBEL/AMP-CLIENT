import type { ReactNode } from 'react';

import CardHome from '@shared/ui/card/card-home/card-home';

import * as styles from './home-banner.css';

interface HomeBannerProps {
  nickname: string;
  status: 'card' | 'none';
  title: string;
  location: string;
  date: string;
  dday: number;
}

const HomeBanner = ({
  nickname,
  status,
  title,
  location,
  date,
  dday,
}: HomeBannerProps) => {
  return (
    <article className={styles.banner}>
      <p className={styles.text}>
        <span className={styles.nickname}>{`${nickname}님, `}</span>
        {status === 'card' ? (
          <>
            다가오는 <br /> 공연을 확인해보세요!
          </>
        ) : (
          <>
            일정이 아직 없어요 <br /> 공연을 추가해보세요!
          </>
        )}
      </p>
      <CardHome title={title} location={location} date={date} dday={dday} />
    </article>
  );
};

export default HomeBanner;
