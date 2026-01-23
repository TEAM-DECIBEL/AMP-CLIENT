import { CardHome } from '@amp/ads-ui';

import * as styles from './home-banner.css';

interface HomeBannerCardProps extends HomeBannerBaseProps {
  status: 'card';
  title: string;
  location: string;
  date: string;
  dday: number;
}

interface HomeBannerNoneProps extends HomeBannerBaseProps {
  status: 'none';
}

type HomeBannerProps = HomeBannerCardProps | HomeBannerNoneProps;
interface HomeBannerBaseProps {
  nickname?: string;
}

const HomeBanner = (props: HomeBannerProps) => {
  const { nickname, status } = props;

  const greeting = nickname?.trim() ? (
    <span className={styles.nickname}>{nickname}님,</span>
  ) : (
    <span className={styles.nickname}>관객님,</span>
  );

  const message =
    status === 'card' ? (
      <>
        다가오는 <br /> 공연을 확인해보세요!
      </>
    ) : (
      <>
        일정이 아직 없어요 <br /> 공연을 추가해보세요!
      </>
    );

  const bannerClassName =
    status === 'card'
      ? `${styles.banner} ${styles.bannerAudience}`
      : `${styles.banner} ${styles.bannerAudienceNone}`;

  if (status === 'card') {
    const { title, location, date, dday } = props;
    return (
      <article className={bannerClassName}>
        <p className={styles.text}>
          {greeting} {message}
        </p>
        <CardHome title={title} location={location} date={date} dday={dday} />
      </article>
    );
  }

  return (
    <article className={bannerClassName}>
      <p className={styles.text}>
        {greeting} {message}
      </p>
    </article>
  );
};

export default HomeBanner;
