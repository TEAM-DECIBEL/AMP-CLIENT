import homeBannerImage from '@shared/assets/images/home-banner.webp';

import * as styles from './card-homebanner-org.css';

interface CardHomebannerOrgProps {
  nickname: string;
}

const CardHomebannerOrg = ({ nickname }: CardHomebannerOrgProps) => {
  return (
    <article className={styles.bannerStyle}>
      <img
        src={homeBannerImage}
        alt='homebanner_branding_img'
        className={styles.imgStyle}
      ></img>
      <p className={styles.textStyle}>
        <span className={styles.nickname}>{nickname}님</span> 공연을 추가하고{' '}
        <br /> 공지를 관리해보세요!
      </p>
    </article>
  );
};

export default CardHomebannerOrg;
