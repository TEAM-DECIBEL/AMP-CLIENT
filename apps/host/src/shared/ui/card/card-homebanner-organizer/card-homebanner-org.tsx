import * as styles from './card-homebanner-org.css';

const CardHomebannerOrg = () => {
  return (
    <article className={styles.bannerStyle}>
      <img src='' alt='homebanner_img' className={styles.imgStyle}></img>
      <p className={styles.textStyle}>
        공연을 추가하고 <br /> 공지를 관리해보세요!
      </p>
    </article>
  );
};

export default CardHomebannerOrg;
