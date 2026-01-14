import CardHome from '@shared/ui/card/card-home/card-home';

import * as styles from './home-banner.css';

interface HomeBannerBaseProps {
  nickname: string;
}

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

const HomeBanner = (props: HomeBannerProps) => {
  const { nickname, status } = props;
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
      {status === 'card' && (
        <CardHome
          title={props.title}
          location={props.location}
          date={props.date}
          dday={props.dday}
        />
      )}
    </article>
  );
};

export default HomeBanner;
