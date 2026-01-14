import type { ReactNode } from 'react';

import * as styles from './home-banner.css';

interface HomeBannerProps {
  nickname: string;
  status: 'card' | 'none';
  card?: ReactNode;
}

const HomeBanner = ({ nickname, status, card }: HomeBannerProps) => {
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
      {card}
    </article>
  );
};

export default HomeBanner;
